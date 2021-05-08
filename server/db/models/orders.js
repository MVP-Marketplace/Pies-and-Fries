const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    customer_name: {type: String, default: null},
    driver_id: {type:String, default: null},
    driver_name:{type:String, default:null},
    cost: {type: Number},
    delivered: {type: Boolean, default: false},
    isReady: {type: Boolean, default: false},
    createdAt: {
        type: Date,
        default: new Date()
    },
    foodItems: [Object],
    contactFree: {type: Boolean, default: false},
    total: {type: Number, default: null},
    notes: {type: String}
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order