import '../styles/Order.css'

const OrderPreview = (props) => {
    
    const getDate = () => {
        const date = new Date(props.order.createdAt)
        const days = date.getDate()
        const month = date.getMonth() + 1
        return `${month}/${days}`
    }
    return (
        <>
        {props.preview === "client" ? (
            <div className="orderPreview" onClick={() => {props.viewSingleOrder(props.order)}}>
            <div className="previewTopRow">
                <p>Order #{props.order._id}</p>
                <p>{getDate()}</p>
            </div>
            <div>
                {props.order.foodItems.map((item,i) => (
                    <p>{item.quantity + ' '} {item.item}</p>
                ))}
            </div>
            </div>
        ) : 
        
        <div className="orderPreview" onClick={() => {props.viewSingleOrder(props.order)}}>
        <div className="previewTopRow">
            <p>Order #{props.order._id}</p>
            <p>{props.order.user_id.delivery_address}</p>
            {props.order.user_id.delivery_line_2 && <p>{props.order.user_id.delivery_line_2}</p>}
            <p>{props.order.user_id.delivery_city}{' ' + props.order.user_id.delivery_state}, {' ' + props.order.user_id.delivery_zip_code}</p>
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
        }
       
        </>
    )
}

export default OrderPreview