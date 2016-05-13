var mysql = require("mysql"), assert = require('assert');
var fs = require('fs');
// create_tables();

function get_pool_connection(){
    return mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'crawler_politicos'
    });
}

function exit(){
    process.exit(1);
}

function execute_sql(sql, data, callback, pool, use_release){
    if (pool == undefined) { pool = get_pool_connection() };
    pool.getConnection(function(err, conn){
        conn.query(sql, data, function(err, result){
            callback(err, result);
        });
        if (use_release == undefined || !use_release) {conn.release();};
    });
}

function create_tables(callback){
    fs.readFile('scripts/create_tables.sql', 'utf-8', function(error, data){
        if(error) throw error;
        if (data == undefined) { return; };
        var pool = get_pool_connection();
        pool.getConnection(function(err, conn){
            var creates = data.split(';');
            for (var i = 0; i < creates.length; i++) {
                var create = creates[i];
                if (create.trim() == '') { continue; };
                conn.query(create,  function(err){
                    if(err){ console.log(err); }
                    else {console.log('Tabela '+i+'  criada com sucesso!'); }
                });
            };
            conn.release();
            if (callback != undefined) {callback()};
            // exit();
        });
    });
}

module.exports = {
    get_pool_connection : get_pool_connection,
    exit: exit,
    execute_sql :execute_sql,
    create_tables: create_tables
};
