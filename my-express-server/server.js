// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
response.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(request, response){
  response.send("Contact me at: mike1109r@gmail.com");
});

app.get("/about_me", function(request, response) {
  response.send("My name is Mike, I am a self taught web designer along with also being a dialysis technician.")
});

app.get("/hobbies", function(request, response) {
  response.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000")
});
