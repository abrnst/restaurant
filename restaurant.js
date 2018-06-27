var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var tables = [
    {
        name: "Steve",
        phoneNumber: "512-745-5656",
        email: "steve@steve.com",
        id: "steve"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});



//displays tables
app.get("/tableArray", function(req, res) {
    for (var i=0; i < tables.length; i++) {
     return res.json(tables);
    }
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });