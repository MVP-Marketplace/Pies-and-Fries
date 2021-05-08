const Order = require('../db/models/orders')
const User = require('../db/models/user')

exports.createOrder = async (req, res) => {
  const newOrderPost = req.body
  const newOrder = new Order(newOrderPost)
  try {
    console.log('HEYYYY')
    console.log(req.body.user_id)
    await newOrder.save()
    console.log('order_id',newOrder._id)
    const user = await User.findOne({
      _id:req.body.user_id
    })
    // console.log(user)
    await user.updateOne({
      order: [...user.order,newOrder._id]
    })
    console.log(user)

    res.status(201).json({newOrder, user});
  } catch (e) {
    res
      .status(400)
      // .json({ error: e.toString(), message: 'Email already exists' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const allOrders = await Order.find().populate("user_id")
    res.json(allOrders);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
exports.getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findOne({"_id": req.body.order_id}).populate("user_id")
    res.json(order);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
exports.getActiveOrders = async (req, res) => {
    try {
      const allOrders = await Order.find({"delivered": "false",
    "isReady": "false"}).populate("user_id")

    res.json(allOrders);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
};
exports.getReadyOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({"delivered": "false",
  "isReady": "true"}).populate("user_id").populate("driver_id")
 
    res.json(allOrders);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

exports.getCompletedOrders = async (req, res) => {
    try {
      const allOrders = await Order.find({"delivered": "true"}).populate("user_id").populate("driver_id")
      res.json(allOrders);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
};
exports.driverGetReadyOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({"delivered": "false",
  "isReady": "true", "driver_id": null}).populate("user_id")
    res.json(allOrders);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
exports.getDriverActiveOrders = async (req, res) => {
    const driver_id = req.params.driver_id
    console.log(driver_id)
    try {
      const allOrders = await Order.find({"driver_id": driver_id, "delivered": "false"} ).populate("user_id")
      res.json(allOrders);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
};
exports.getDriverCompletedOrders = async (req, res) => {
    const driver_id = req.params.driver_id
    try {
      const allOrders = await Order.find({"driver_id": driver_id, "delivered": true} ).populate("user_id")
      res.json(allOrders);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
};
// exports.updateOrder = async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['name', 'quantity', 'size', 'isReady'];
//   const isValidOperation = updates.every(update =>
//     allowedUpdates.includes(update)
//   );
//   if (!isValidOperation)
//     return res.status(400).send({ error: 'invalid updates' });
//   try {
//     updates.forEach(update => (req.item[update] = req.body[update]));
//     await req.item.save();
//     res.json(req.item);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };
exports.addDriverToOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      "_id": req.params.order_id,

    }) 
    const updates = req.body
    if(order.driver_id === null) {
      await order.updateOne(updates)
      res.json(order);
    } else {
      res.status(400) 
      res.json({message: 'another driver is already assigned to this order'})
    }
  
  } catch (error) {
    console.log(error)
  }
};
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      "_id": req.params.order_id,

    }) 
    const updates = req.body
    await order.updateOne(updates)
    res.json(order);
  } catch (error) {
    console.log(error)
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await req.item.remove();
    res.json({ message: 'Order deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

