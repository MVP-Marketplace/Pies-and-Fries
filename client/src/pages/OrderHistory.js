import {AppContext} from '../context/AppContext'
import {useContext, useState} from 'react'
import OrderPreview from '../components/OrderPreview'
import CustomerOrderDetails from '../components/CustomerOrderDetails'
import '../styles/OrderHistory.scss'

const OrderHistory = () => {
    const {userState} = useContext(AppContext)
    const[user,setUser] = userState 
    const [currentOrder, setCurrentOrder] = useState(null)
    const[showSingleOrder,setShowSingleOrder] = useState(false)

    const viewSingleOrder = (order) => {
        setCurrentOrder(order)
        setShowSingleOrder(!showSingleOrder)
    }
    return (
        <div className="order-history-container">
        {!showSingleOrder ? 
        user && user.order && user.order.map((order,i) => 
            <OrderPreview 
            order={order} 
            preview={"client"}
            viewSingleOrder = {viewSingleOrder}
            />
            ):
            <>
                <button className="back-button"onClick={() => setShowSingleOrder(false)}>Back</button>
                <CustomerOrderDetails order = {currentOrder} 
                user = {user}
                />
            </>
            }
        </div>
    )
}

export default OrderHistory