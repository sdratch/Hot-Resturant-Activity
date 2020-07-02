
const express = require("express");
const path = require("path");

const app = express();
var PORT = 3000;

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

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
