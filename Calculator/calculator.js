// jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Calculator
//
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

// BMI Calculator

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

   var height = parseFloat(req.body.ht);
   var weight = parseFloat(req.body.wt);

   var bmi = weight / height^2;

   res.send("Your BMI is " + bmi);
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
