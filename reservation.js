//npm packages
var express = require("express");
var path = require("path");

//set up express
var app = express();
var PORT = process.env.PORT || 3001; 
console.log("this is loaded")

//using express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


//Route to file paths
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/api/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.json"));
});
app.get("/api/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "waitlist.json"));
});
app.get("/api/clear", function(req, res) {
  res.sendFile(path.join(__dirname, "clear.json"));
});

//app.get("/api/waitlist", function(req, res){);}
//res.json(waitlist);
//});



//On Click Logic for buttons here
// function addData() {
//   find current url

//     ajax call = file path to json GET 
//               then return Response
//               display using jquery

// }