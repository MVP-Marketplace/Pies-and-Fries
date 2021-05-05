const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    user_id: {type: String, default: null},
    //how do you pull this?
    customer_name: {type: String, default: null},
    //wouldn't this need to be driver id
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
    notes: {type: String}
})

const orders = mongoose.model("Orders", ordersSchema)

module.exports = orders