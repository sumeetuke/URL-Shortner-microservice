"prequsit";

var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var routs = require('./app/routes/index.js');
var api   = require('./app/api/url-shortener.js');
require ('dotenv').config({
  silent:true
})
var app= express();
mongo.MongoClient.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener', function(err, db) {

 if (error) {

   throw new Error ('Database fail to connect!');
   }
   else {
     console.log('sucess full connect to mongodb on port 27017.');
   }
app.set('view',path.join (_dirname,'view'));
app.set('view engine','jade');
db.createCollection("sites",{
  capped: true ,
  size:5242800,
  max:5000
});

routes(app,db);
api(app,db);
var port=process.env PORT||8080;
app.listen(port,function(){
  console.log('Node.js listening on port ' + port);
  });
});
