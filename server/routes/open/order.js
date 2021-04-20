const router = require('express').Router()
const orders = require('../../controllers/orders')
router.get('/', orders.getOrders)
router.get('/active', orders.getActiveOrders)
router.get('/completed', orders.getCompletedOrders)
router.post('/create', orders.createOrder )
router.put('/update', orders.updateOrder)
router.delete('/delete', orders.deleteOrder)
module.exports = router;
