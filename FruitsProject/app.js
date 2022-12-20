//jshint esversion:6

const mongoose = require ('mongoose');

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);


// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });

// person.save();

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit!"
});

const kiwi = new Fruit ({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit ({
  name: "Orange",
  rating: 4,
  review: "Too sour for me"
});

const banana = new Fruit ({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

const fruit = new Fruit ({
  name: "Peach",
  rating: 10,
  review: "Peaches are so yummy!"
});

const blueberry = new Fruit ({
  name: "Blueberry",
  rating: 10,
  review: "They are amazing!"
});

// fruit.save();


// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully save all the fruits to fruitsDB");
//   }
//   });


Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({name: "Apple"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.")
//   }
// });

// Fruit.deleteOne({name: "Apple"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.")
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all the document.")
//   }
// });

//  Person.updateOne({name: "John"}, {favoriteFruit: blueberry}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });