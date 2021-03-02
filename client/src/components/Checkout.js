import react, { useState , useEffect } from 'react'
import StripeCheckout from "react-stripe-checkout"

/// we need to make the orders 

const Checkout = () => {
    let pub = 'pk_test_51ILvkgDnPJT2qYVZZ7fkC04pIsFAZhU8WPkJJpcCPmTQg3nmQo3zRIACXt4PlqkgoqPEe8361cGXp9x6FIz0EGvm004S91JfKU'

const [product, setProduct] = useState({
    name: "pizza",
    price:12,
    productBy: "Pizza and fries"
});


const makePayment = token =>{
    const body = {
        token, 
        product
    }
    const headers ={ 
        "content-Type": "application/json"
    }
return fetch (`/api/payments`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
}).then(res =>{
    console.log("RESPONSE ", res)
    const {status} = res;
    console.log("status" , status)
})
.catch(error=> console.log(error))



}

    return (
        <>
            <StripeCheckout 
            stripeKey = {pub}
            token={makePayment}
            amount={product.price * 100}
            Name="Buy Some Pizza"
            />
        </>
    )
}

export default Checkout
