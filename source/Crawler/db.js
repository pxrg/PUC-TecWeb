var MongoClient = require("mongodb").MongoClient,
    assert = require('assert');
var db_name = 'conteudo_info';


var url = 'mongodb://localhost:27017/crawler';
MongoClient.connect(url, function(err, db){
    assert.equal(null, err);
    console.log('Conectado corretamente ao servidor');
    db.collection("documents").drop();
    // insertDocuments(db, function(){
    // updateDocument(db, function(){
    //     findDocuments(db, function(){
    //         db.close();
    //     })
    // })
});

var insertData = function(db, data, callback){
    // Get the documents collection
    var collection = db.collection(db_name);
    // Insert some documents
    collection.insertMany(data, function(err, result){
        assert.equal(err, null);
        console.log("Foram inseridos "+result.result.n+" registros");
        callback(result);
    });
}

var updateData = function(db, data_key, data_set, callback){
    var collection = db.collection(db_name);
    collection.updateMany( data_key, data_set,
              function(err, result){
            assert.equal(err, null);
            console.log("Foram atualizados "+result.result.n+" registros");
            callback(result);
         });
}

var findData = function(db, query, callback){
    var collection = db.collection(db_name);
    collection.find(query).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("Foram encontrados: "+docs.length);
        // console.dir(docs);
        callback(docs);
    });
}
