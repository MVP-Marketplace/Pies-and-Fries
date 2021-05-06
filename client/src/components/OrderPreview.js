import '../styles/Order.css'

const OrderPreview = (props) => {
    return (
        <>
        <div className="orderPreview" onClick={() => {props.viewSingleOrder(props.order)}}>
            <div className="previewTopRow">
                <p>Order #{props.order._id}</p>
                <p>address</p>
                <p>address2</p>
            </div>
            <div>
                {props.order.foodItems.map((item,i) => (
                    <p>{item.quantity + ' '} {item.item}</p>
                ))}
                {!props.order.driver_id &&                 
                <button onClick={() => props.assignOrderToDriver(props.order._id)}>Pick Up</button>
                }
            </div>
        </div>
        </>
    )
}

export default OrderPreview