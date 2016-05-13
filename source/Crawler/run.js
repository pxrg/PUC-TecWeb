var mysql = require("mysql"), assert = require('assert');
var Twitter = require('twitter');
var fs = require('fs');

var config = require('./config');
var db = require('./db_mysql');
var sql_scripts = require('./scripts/mysql_scripts');
var tw = require('./server');

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
var opcoes_validas= ['_', 'i', 'init', 'l', 'load', 'u', 'users', 't', 'tw', 'c'];
var params = Object.keys(argv);
if (params.length > 1) {
    for (var i = 0; i < params.length; i++) {
        if (opcoes_validas.indexOf(params[i]) < 0) {
            console.log('Parametro invalido: '+params[i]);
            process.exit(-1);
            break;
        };
    };
}else{
    console.log("Informe algum parametro valido.")
    process.exit(-1);
}

var callback = undefined;
// Cria/recria o banco da dados
if (argv.init != undefined || argv.i != undefined) {
    if (argv.load != undefined || argv.l != undefined){
        callback = inicializa_dados;
    };
    db.create_tables(callback);
};

// Preenche dados iniciais como nomes dos partidos e fontes
if (callback == undefined && (argv.load != undefined || argv.l != undefined)) {
    inicializa_dados();
};
function inicializa_dados(){
    var pool = db.get_pool_connection();
    var scripts_partidos = sql_scripts.init_partidos;
    for (var i = 0; i < scripts_partidos.length; i++) {
        db.execute_sql(scripts_partidos[i], [], function(){}, pool);
    };
    console.log("Scripts de inicializados dos partidos executado com sucesso.")
    var scripts_fontes = sql_scripts.init_fontes_info;
    for (var i = 0; i < scripts_fontes.length; i++) {
        db.execute_sql(scripts_fontes[i], [], function(){}, pool);
    };
    console.log("Scripts de inicializados das fontes dos partidos executado com sucesso.")
}

// Busca os usuarios dos partidos
function buscar_usuarios(us, id){
    client = tw.twitter_client();
    // tw.twitter_get('users/search', {q: us}, function(data, respose){
    tw.twitter_get('users/show', {screen_name: us}, function(data, respose){
        // console.dir(Object.keys(data));
        // console.dir(data);
        db.execute_sql('update partidos set id_referencia = ?, imagem = ? where id = ?;',
                       [data.id_str, data.profile_image_url, id],
                       function(err, result){});
    }, client);
}

if (argv.users != undefined || argv.u != undefined) {
    db.execute_sql('select * from partidos;', [], function(err, result){
        var len = result.length;
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                // console.dir(result[i].id);
                console.log('Buscando dados para: '+result[i].nome+ ', no link: '+result[i].link);
                var us = tw.tw_screen_name(result[i].link);
                buscar_usuarios(us, result[i].id);
                // break;
            };
        };
    });
}

function inserir_tweet(conn, tweet, id_partido){
    db.execute_sql( "select id from informacoes where id_referencia = ?",[tweet.id_str],
           function(err, result){
            if (result.length > 0) {
                //update
            }else{
                //insert
                db.execute_sql('insert into informacoes(conteudo,id_referencia,objeto_original,id_fonte_info,id_partido) values(?,?,?,?,?)',
                               [tweet.text, tweet.id_str, JSON.stringify(tweet), 1, id_partido],
                               function(error, res){
                                    console.log("Registro inserido com sucesso,id: "+result.insertId);
                               }, conn) ;
            }

           } ,conn);
}

function buscar_tweets(user, id_partido){
    client = tw.twitter_client();
    tw.twitter_get('search/tweets', {q: user, count: 200}, function(data, respose){
        var len = data.statuses.length;
        var pool = db.get_pool_connection();
        pool.getConnection(function(err, conn){
            for (var i = 0; i < len; i++) {
                // inserir_tweet(conn, data.statuses[i], id_partido);
                var tweet = data.statuses[i];
                    conn.query( "select id from informacoes where id_referencia = ?",[tweet.id_str],
                       function(err, result){
                        if (result.length > 0) {
                            //update
                        }else{
                            //insert
                            conn.query('insert into informacoes(conteudo,id_referencia,objeto_original,id_fonte_info,id_partido) values(?,?,?,?,?)',
                                           [tweet.text, tweet.id_str, JSON.stringify(tweet), 1, id_partido],
                                           function(error, res){
                                                console.log("Registro inserido com sucesso,id: "+res.insertId);
                                           });
                        }
                       });
                // break;
            };
            conn.release();
        });
   }, client);
}

if (argv.tw != undefined || argv.t != undefined){
    db.execute_sql('select * from partidos;', [], function(err, result){
        var len = result.length;
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                // console.dir(result[i].id);
                var user = tw.tw_screen_name(result[i].link);
                console.log('Buscando tweets para: '+result[i].nome+ ', no link: '+user);
                buscar_tweets(user, result[i].id);
                // break;
            };
        };
    });
}
// process.exit();
