const mongoose = require('mongoose');

let MySchema = new mongoose.Schema({
    name: String,
    age: Number
})


let MyModel = mongoose.model("ironhacker", MySchema)

module.exports = MyModel