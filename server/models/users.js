const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {type: String, required: true,},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    username: {type: String, required: true,trim: true},    
    number: {type: Number, required: true},
    address: {type: String, required: true},
    order: [String]
})

const User = mongoose.model("Users", userSchema)

module.exports = User