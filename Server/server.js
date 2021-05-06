const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const PORT = config.get("port") || 5000;

app.use(express.json({extended: true}));

app.use('/api/user', require ('./routes/User.route.js') );

 async function start() {
     try {
         await mongoose.connect(config.get("mongoUri"), {
             useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex: true
         });
         app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
     } catch (e) {
         console.log('Server Error!', e.message.toString());
         process.exit(1);
     }
 }
 start();



/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Admin:1234@db.s84ec.mongodb.net/myFirstDatabase";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

try {
    MongoClient.connect(uri, (err, db) => {
        // Database returned
    });
    console.log('Connect done');
    // client.connect(err => {
    //     const collection = client.db("myFirstDatabase").collection("q");
    //     // perform actions on the collection object
    //     client.close();
    // });
}
catch (e) {
        console.log('Server Error!', e.message.toString());
        process.exit(1);
}*/

//"mongoUri" : "mongodb://Admin:1234@db-shard-00-00.s84ec.mongodb.net:27017,db-shard-00-01.s84ec.mongodb.net:27017,db-shard-00-02.s84ec.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-22ra66-shard-0&authSource=admin&retryWrites=true&w=majority"

