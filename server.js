//creae front end visulas
// 3 different htmls home, reservation form, and reservation views.
//have links to the other
//create basic server using express
//require express and set it to app
//assign a port
//put in code for data parsing
//listen for the port and print app is listening on PORT (port)
//Create a few array variables to hold the data.
// create
//use post routes to get reservation data
//use get routes to post the data (JSON)
//use get routes to display the html pages

const express = require("express");
const path = require("path");

const app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
