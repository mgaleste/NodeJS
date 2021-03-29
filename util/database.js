const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

exports.mongoDBConnect = callback => {
const uri = "mongodb+srv://mixerwars:Asdf1234!@cluster0.ezaul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
dbClient.connect()
.then(client =>{
    callback(client);
})
.catch(err=>console.log(err));
};