import Tracker from './Tracker'

import {useState, useEffect} from 'react'
import '../styles/CustomerOrderDetails.scss'

const CustomerOrderDetails = (props) => {
    const [percentage,setPercentage] = useState(0)

    useEffect(() => {
        setOrderValue()
    },[])

    const setOrderValue = () => {
        if(props.order.isReady === true && props.order.delivered === true) {
            setPercentage(100)
        } else if (props.order.isReady === true && props.order.delivered === false) {
            setPercentage(70)
        } else {
            setPercentage(30)
        }
    }

    return (
        <>
        <div className="trackerContainer">
            <Tracker percentage={percentage}/>
        </div>
        <div className="section">
            <h4 className="section-header">Delivering to </h4>
            <p>{props.user.delivery_address}</p>
            <p>{props.user.delivery_city},{" " + props.user.delivery_state}, {" " + props.user.delivery_zip_code}</p>
        </div>
        <div className="section">
            <p className="contact-free">{props.order.contactFree ? "Contact-free delivery": "Meet customer at door"}</p>
            <p>Call customer when you arrive</p>
            <p className="customerName">{props.order.customer_name}</p>
            <div className="contactClient">
                <p className="clientNumber">{props.order.user_id.number}</p>
            </div>
        </div>
        <div className="section">
        <p>Order Details</p>    
            <div className="order-pic-items">
                <div className="order-number-items">
                <p>Order #{props.order._id}</p>
                <p className="customerName">{props.order.customer_name}</p>
                </div>
               <div>
               <p className="order-items"> {props.order.foodItems[0].quantity} {props.order.foodItems[0].item}</p>
               </div>
              
            </div>
        </div> 
        <div className="driverOptions">
            <button className="callRestaraunt">Call Restaraunt: (000) 000-0000</button>
            {(props.order.driver_id && !props.order.delivered) && <button className="orderComplete" onClick={() => props.completeDelivery(props.order._id)}>Order Complete</button>}
        </div>  
        </>
    )
}

export default CustomerOrderDetails