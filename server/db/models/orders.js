const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    user_id: {type: String},
    customer_name: {type: String},
    driver_id: {type:String, default: null},
    cost: {type: Number},
    delivered: {type: Boolean, default: false},
    isReady: {type: Boolean, default: false},
    createdAt: {
        type: Date,
        default: new Date()
    },
    foodItems: [Object],
    notes: {type: String}
})

const orders = mongoose.model("Orders", ordersSchema)

module.exports = orders