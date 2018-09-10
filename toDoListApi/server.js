// var http = require('http');
// var https = require('https');
// var fs = require("fs");
express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/toDoListModel'), //created model loading here
  bodyParser = require('body-parser');
  // var options = {

  //   key: fs.readFileSync("mockserver.key"),
    
  //   cert: fs.readFileSync("mockserver.crt")
    
  //   }
  
  // var server = https.createServer(options,app);
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jessengrg:jessengrg@cluster0-2mzka.mongodb.net/toDoList?retryWrites=true'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/toDoListRoute'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
