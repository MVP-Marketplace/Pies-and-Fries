
const stripe = require('stripe')
const { v4: uuidv4 } = require('uuid');

exports.payment = async (req,res)=>{
	const {product,token} = req.body;
	const idempontencyKey = uuidv4()

    return stripe.customers.create({
    email:token.email,
    source:token.id
    }).then(customer => {
        stripe.charges.create({
        amount:product.price * 100,
        currency:'usd',
        customer: customer.id,
        description: `purchase of ${product.name}`,
        }, {idempontencyKey})
}) 
.then(result =>res.status(200).json(result))
.catch(err => console.log(err))
}