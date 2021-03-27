import {useState, useEffect} from 'react'

const ShoppingCart = (props) => {
    
    const deleteItem = (arr, i) => {
        arr.splice(i, 1)
        props.setCart([...arr])
     }

    return (
        <div>
            {props.cart.map((item, i) => (
                    <div key ={i}>
                    <h1>{item.name} </h1>
                    <h2>Quantity: {item.quantity}</h2>
                    <h2>Size: {item.size}</h2>
                    {/* <button onClick={() => updateCart(props.cart,i)}>Delete from cart</button> */}
                    <button onClick={() => deleteItem(props.cart,i)}>Delete from cart</button>
                    </div>
                ))
            }
            <button>
                Checkout
            </button>
            {/* if stripe goes through, then push this order to the orders database */}
        </div>
    )
}

export default ShoppingCart