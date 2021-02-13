const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, defaultValue: 0},
    size: {type: String}
})

const menuItem = mongoose.model("Menu Item", menuItemSchema)

module.exports = menuItem