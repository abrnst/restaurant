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


app.get("/api/tables," function(req, res) {
    return res.json(tables);
})