import {useState}from 'react'
import '../styles/DriverOrderDetails.css'


const DriverOrderDetails = (props) => {
    return (
        <>
        <div className="section">
            <p>Delivering to</p>
            <p>Address</p>
            <p>State</p>

        </div>
        <div className="section">
            <p>Delivery Directions</p>
            <p className="customerName">{props.order.customer_name}</p>
            <div className="contactClient">
                <p>Customer number</p>
                <button className="callButton">Call</button>
            </div>
        </div>
        <div className="section">
        <p>Order Details</p>    
            <div className="order-pic-items">
                <div className="order-picture">

                </div>
                <p className="order-items"> {props.order.foodItems[0].quantity} {props.order.foodItems[0].item}</p>
            </div>
        </div> 
        <div className="driverOptions">
            <button className="callRestaraunt">Call Restaraunt: (000) 000-0000</button>
            {(props.order.driver_id && !props.order.delivered) && <button className="orderComplete" onClick={() => props.completeDelivery(props.order._id)}>Order Complete</button>
}
        </div>  
        </>
    )
}

export default DriverOrderDetails