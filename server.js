const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const table = [
  {
    name: "bob",
    phone: 23141234,
    email: "bob@gmail.com",
    id: 12,
  },
];
const wait = [
  {
    name: "bob324",
    phone: 23141234,
    email: "bob@gmail.com",
    id: 12,
  },
];
// Routes
// =================================================

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/table", (req, res) => {
  return res.json(table);
});
app.get("/api/wait", (req, res) => {
  return res.json(wait);
});

//app.post path is going to be whatever they post to  either table or wait or just api
// insided nested function is where we will do logic and output results
//req.body to get results

// app.post("/api/table", function(req, res){
  //   const newReservation = req.body;
  //   table.push(newReservation);
  //   res.json(newReservation);
  // });

app.post("/api/table", function (req, res) {
  let newReserve = req.body;
  if (table.length < 5) {
    table.push(newReserve);
    res.json(true);
  } else {
    wait.push(newReserve);
    res.json(false);
  }
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
  

  
  


