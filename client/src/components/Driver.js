import React, {useState, useEffect} from 'react';
import '../styles/Driver.css'
const Driver = () => {
  const[readyOrders,setReadyOrders] = useState(null)
  const[currentOrder,setCurrentOrder] = useState(null)
  const[showSingleOrder,setShowSingleOrder] = useState(false)
      const getReadyItems = () => {
        fetch('/api/orders/active/ready', {'credentials': 'include'})
        .then(res => res.json())
        .then(res => {
          console.log(res)
          setReadyOrders(res)
        })
        .catch(err => {
            console.log(err)})
      }

    useEffect(() => {
        getReadyItems()
    },[])
    const viewSingleOrder = (order) => {
        setCurrentOrder(order)
        setShowSingleOrder(true)
    }
    // const orderIsReady = (orderId) => {
    //   console.log(orderId)
    //   fetch(`/api/orders/update/${orderId}`,  {
    //     method: 'PUT',
    //     body: JSON.stringify({isReady: true}),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)})
    //   }
    
  return (
    <div className='admin-container'>
      <h3 className='welcome-message'>Shalom Driver!</h3>
      {!showSingleOrder && (
          <div className="current-orders">
          <h4 className="orders-header">Current Orders</h4>
          {readyOrders && (
              readyOrders.map((order,i) => (
                <div className="single-order" key={i} onClick={() => viewSingleOrder(order)}>  
                  <h4 className="order-details">Order Details: Order # {order._id}</h4>
                  <div className="order-pic-items">
                    <div className="order-picture">

                    </div>
                    <div>
                        <p className="order-items"> {order.foodItems[0].quantity} {order.foodItems[0].item}</p>
                        <button className="pickup-button">Pick Up</button>
                    </div>
                  
                    </div>
                </div>
                
              ))
            )}
          {/* <div className="single-order">
            
          <h4 className="order-details">Order Details: Order # 0001</h4>

              <div className="order-pic-items">
                <div className="order-picture">

                </div>
                <p className="order-items">2 Large Plain Pies</p>
              </div>
              <div className="notes-for-kitchen">
                  <p>Notes for Kitchen</p>
              </div>
              <h4 className="order-headers delivering-to">Delivering to</h4>
              <p className="address">lorem ipsum dolor sit amet</p>
              <p className="address2">lorem ipsum dolor sit amet</p>
            <div className="customer-name">
                <h4>Customer Name</h4>
                <h4>(000) 000-0000</h4>
            </div>
            <h4 className="order-headers">Payment Method</h4>
            <p className="credit-info">Credit Card - 0202</p>

            <h4 className="order-headers">Contact-free delivery</h4>
            <p className="delivery-instructions">Call customer when you arrive</p>
            <button className="pickup-button">Ready for Pickup</button>
            <h4 className="driver-info">Your Driver is Danny</h4>
            <h4 className="driver-info">(000) 000-0000</h4>
          </div> */}
      </div>
      )}
      {showSingleOrder && (
          <div className="single-order"onClick={() => setShowSingleOrder(false)}>
              <div className="delivering-to">
                <h1>Delivering To:</h1>
                <p>lorem</p>
                <p>lorem</p>
              </div>
             <div className="customer-info">
                <div className="order-pic-items">
                        <div className="order-picture">

                        </div>
                        <div>
                            <p className="order-items"> {currentOrder.foodItems[0].quantity} {currentOrder.foodItems[0].item}</p>
                            <button className="pickup-button">Pick Up</button>
                        </div>
                    
                    </div>
             </div>
            <div className="order-details"></div>
            <div className="driver-options">
                <button>Call restaraunt: (000)-000-0000</button>
                <button>Order Complete</button>
            </div>
          </div>
      )}
     
    </div> 
  );
};

export default Driver;
