const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

// const MongoConnect
const mongoConnect = (callback) => {
MongoClient.connect('mongodb+srv://md:6rLh17hlbsRbmjCz@realmcluster.ed0lu.mongodb.net/shop?retryWrites=true&w=majority')
.then(client =>{ 
    console.log("connected");
    _db = client.db();
    callback();
})
.catch(err =>{
    console.log(err)
    throw err;
})

}

const getDb = () =>{
    if(_db){
        return _db;
    }
    return "No Db to connect"
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

