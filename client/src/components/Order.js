import '../styles/Admin.scss'


const Order = (props) => {

    return (
        <>
       
            <div className="single-order">
                  
            <h4 className="order-details">Order Details: Order # {props.order._id}</h4>
            <div className="order-pic-items">
            <div className="order-picture">
                <img src={require(`../assets/pizzaBackground.svg`).default} className="pizza-pic" alt="pizza-pic"/>
            </div>
            <p className="order-items"> {props.order.foodItems[0].quantity} {props.order.foodItems[0].item}</p>
            </div>
            <div className="notes-for-kitchen">
                <p>Notes for kitchen: {props.order.notes && props.order.notes}</p>
            </div>
            <h4 className="order-headers delivering-to">Delivering to</h4>
            <p className="address">{props.order.user_id.delivery_address}</p>
            <p className="address2">{props.order.user_id.delivery_line_2 && props.order.user_id.delivery_line_2}</p>
            <div className="customer-name">
                <h4>{props.order.customer_name}</h4>
                <h4>{props.order.user_id.number}</h4>
            </div>
            <h4 className="order-headers">Payment Method</h4>
            <p className="credit-info">Credit Card - 0202</p>

            <h4 className="order-headers">{props.order.contactFree ? "Contact-free delivery": "Meet customer at door"}</h4>
            <p className="delivery-instructions">Call customer when you arrive</p>
            {props.orderIsReady && <button className="pickup-button" onClick={() => props.orderIsReady(props.order._id)}>Ready for Pickup</button>
}
            {props.order.driver_id && (
                <div className="driver-info">
                    <h4>
                        Driver
                    </h4>
                    <h4 className="driver-name">{ props.order.driver_id.name} 
                    </h4>
                    <h4 className="driver-number">{props.order.driver_id.number}
                    </h4>
                </div>
            )}
        </div>
        {props.viewSingleOrder && <button onClick={() => props.viewSingleOrder(props.order)}>Back</button>}
        </>
    )
}

export default Order