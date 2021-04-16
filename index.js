const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', 
{useNewUrlParser: true, useUnifiedTopology: true})
 .then((self) => {
    console.log("MongoDB is connected")
    return mongoose.connection.dropDatabase()
    //or
    //self.connection.dropDatabase()
 })
 .then(() => {
     //Creating data //Create

    return MyModel.create({name: "Luis", age:18}, {name: "Jorge", age:28})
    .then(() => {
        console.log("data added")
    }).catch(() => {
        console.log("Failed")
    })
})
.then(() => {
    MyModel.find({name: "Luis"})
    .then((data) => {
        console.log("Data fetched", data)
    })
    .catch(() => {
        console.log("Failed to create")
    })

//     MyModel.updateOne({name: "Luis"}, {name: "Luis2"})
// .then(() => {

// })
// .catch(() => {

// })

   MyModel.deleteOne({name: "Jorge"})
   .then()
   .catch()

})
 .catch(() => {
     console.log("Connection failed")
 })

//  let MySchema = new mongoose.Schema({
//      name: {
//          type: String,
//      },
//      age:  {
//          type: Number
//      }
//  })

let MyModel = require("./models/MyModel")


//Read


//Update


