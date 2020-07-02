const express = require("express");
const path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


  // Routes
  // =================================================

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });