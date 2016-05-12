var mysql = require("mysql"), assert = require('assert');
var fs = require('fs');

var config = require('./config');
var db = require('./db_mysql');
var sql_scripts = require('./scripts/mysql_scripts');

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

if (argv.init != undefined || argv.i != undefined) {
    db.create_tables();
};

if (argv.load != undefined || argv.l != undefined) {
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
};
