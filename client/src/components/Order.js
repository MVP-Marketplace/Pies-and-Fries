import {useState}from 'react'
import '../styles/Admin.css'


const Order = (props) => {

    return (
        <>
       
            <div className="single-order">
                  
            <h4 className="order-details">Order Details: Order # {props.order._id}</h4>
            <div className="order-pic-items">
            <div className="order-picture">

            </div>
            <p className="order-items"> {props.order.foodItems[0].quantity} {props.order.foodItems[0].item}</p>
            </div>
            <div className="notes-for-kitchen">
                <p>Notes for kitchen: {props.order.notes && props.order.notes}</p>
            </div>
            <h4 className="order-headers delivering-to">Delivering to</h4>
            <p className="address">lorem ipsum dolor sit amet</p>
            <p className="address2">lorem ipsum dolor sit amet</p>
            <div className="customer-name">
                <h4>Customer: {props.order.customer_name}</h4>
                <h4>(000) 000-0000</h4>
            </div>
            <h4 className="order-headers">Payment Method</h4>
            <p className="credit-info">Credit Card - 0202</p>

            <h4 className="order-headers">Contact-free delivery</h4>
            <p className="delivery-instructions">Call customer when you arrive</p>
            {props.orderIsReady && <button className="pickup-button" onClick={() => props.orderIsReady(props.order._id)}>Ready for Pickup</button>
}
            <h4 className="driver-info">{props.order.driver_name ? props.order.driver_name : 'Pending'}</h4>
            <h4 className="driver-info">(000) 000-0000</h4>
        </div>
        {props.viewSingleOrder && <button onClick={() => props.viewSingleOrder(props.order)}>Back</button>}
        </>
    )
}

export default Order