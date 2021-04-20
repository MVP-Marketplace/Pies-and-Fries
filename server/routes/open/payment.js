const router = require('express').Router()
const payment = require('../../controllers/payments')
router.post('/charge', payment.payment)

module.exports = router;
