import { useState , useContext } from 'react'
import StripeCheckout from "react-stripe-checkout"
import {AppContext} from '../context/AppContext'

/// we need to make the orders 

const Checkout = () => {
    let pub = 'pk_test_51ILvkgDnPJT2qYVZZ7fkC04pIsFAZhU8WPkJJpcCPmTQg3nmQo3zRIACXt4PlqkgoqPEe8361cGXp9x6FIz0EGvm004S91JfKU'

const [product] = useState({
    name: "pizza",
    price:12,
    productBy: "Pizza and fries"
});

const {userState} = useContext(AppContext)
const[user] = userState


const makePayment = token => {
    const body = {
        token, 
        product
    }
        const headers ={ 
                "content-Type": "application/json"
        }
        return fetch (`/api/payments/charge`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(res =>{
            console.log("RESPONSE ", res)
            const {status} = res;
            console.log("status" , status)
            if(status === 200) {
                console.log('working')
                fetch(`/api/orders/create`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        user_id: user._id,
                        customer_name: user.name,
                        foodItems: {
                          item: product.name,
                          quantity: 1,
                        }
                    })
                })
                .then((res => {
                    console.log(res)
                }))
            }
        })
        .catch(error=> {
            console.log('DID NOT WORK')
            console.log(error)
        })

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
