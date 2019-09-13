var express = require("express");
var router = express.Router();

//Import the model (burger.js) to use its database functions.

var burger = require("../model/burger.js");

//Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res){
  res.render("index");
  burger.all(function(data));
});

router.get("/api/burgers", function(req, res))