import '../styles/DriverOrderDetails.scss'

import Map from './MapBox'

const DriverOrderDetails = (props) => {
    return (
        <>
        
        <div className="section">
            <h4 className="section-header">Delivering to </h4>
            <p>{props.order.user_id.delivery_address}</p>
            <p>{props.order.user_id.delivery_city},{" " + props.order.user_id.delivery_state}, {" " + props.order.user_id.delivery_zip_code}</p>
        </div>
        <div className="mapBoxContainer section">
            <Map lat = {40.881340} lng ={-74.043800}/>
        </div>
        <div className="section">
            <p className="contact-free">{props.order.contactFree ? "Contact-free delivery": "Meet customer at door"}</p>
            <p>Call customer when you arrive</p>
            <p className="customerName">{props.order.customer_name}</p>
            <div className="contactClient">
                <p className="clientNumber">{props.order.user_id.number}</p>
                <button className="callButton">Call</button>
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

export default DriverOrderDetails