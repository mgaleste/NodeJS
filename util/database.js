const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

let _db;

const mongoDBConnect = callback => {
const uri = "mongodb+srv://mixerwars:Asdf1234!@cluster0.ezaul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
dbClient.connect()
.then(client =>{
    console.log('Connected');
    _db = client.db();
    callback();
})
.catch(err=>{
    console.log(err);
    throw err;
})
};

const getDB = () => {
    if(_db){
        return _db;
    }
    throw 'No Database defined';
}

exports.mongoDBConnect= mongoDBConnect
exports.getDB = getDB;