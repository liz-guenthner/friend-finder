//npm packages
var express = require("express");
var path = require("path");

//set up express
var app = express();
var PORT = process.env.PORT || 3001; 

//using express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});