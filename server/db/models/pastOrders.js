const mongoose = require('mongoose')

const pastOrdersSchema = new mongoose.Schema({
    user_id:{type:String},
    order_id: {type:String}
})

const pastOrders = mongoose.model("Past Orders", pastOrdersSchema)

module.exports = pastOrders