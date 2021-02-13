const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    user_id: {type: String},
    cost: {type: Number},
    delivered: {type: Boolean, default: false},
    createdAt: {
        type: Date,
        default: new Date()
    },
    foodItems: [String]
})

const orders = mongoose.model("Orders", ordersSchema)

module.exports = orders