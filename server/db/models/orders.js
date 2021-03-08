const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    user_id: {type: String},
    driver_id: {type:String, default: null},
    cost: {type: Number},
    delivered: {type: Boolean, default: false},
    createdAt: {
        type: Date,
        default: new Date()
    },
    foodItems: [Object]
})

const orders = mongoose.model("Orders", ordersSchema)

module.exports = orders