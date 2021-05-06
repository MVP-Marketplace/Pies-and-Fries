const router = require('express').Router()
const orders = require('../../controllers/orders')
router.get('/', orders.getOrders)
router.get('/active', orders.getActiveOrders)
router.get('/active/ready', orders.getReadyOrders)
router.get('/completed', orders.getCompletedOrders)
router.post('/create', orders.createOrder )
router.put('/update/:order_id', orders.updateOrder)
router.delete('/delete', orders.deleteOrder)
router.post('/single', orders.getSingleOrder)
router.get('/getreadyorders', orders.driverGetReadyOrders)
router.get('/:driver_id/getorders', orders.getDriverActiveOrders)
router.get('/:driver_id/getcompleted', orders.getDriverCompletedOrders)


module.exports = router;
