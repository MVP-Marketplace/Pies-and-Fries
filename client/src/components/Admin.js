import React, {useState, useEffect} from 'react';
import '../styles/Admin.css'
const Admin = () => {
  const[activeOrders,setActiveOrders] = useState(null)
  const [readyOrders, setReadyOrders] = useState(null)
      const getActiveItems = () => {
        fetch('/api/orders/active', {'credentials': 'include'})
        .then(res => res.json())
        .then(res => {
          console.log(res)
          setActiveOrders(res)
        })
        .catch(err => {
            console.log(err)})
      }
      const getReadyOrders = () => {
        fetch('/api/orders/active/ready',  {'credentials': 'include'})
        .then(res => res.json())
        .then(res => {
          console.log(res)
          setReadyOrders(res)
        })
        .catch(err => {
          console.log(err)
        })
      }

    useEffect(() => {
        getActiveItems()
        getReadyOrders()
    },[])

    
    const orderIsReady = (orderId) => {
      console.log(orderId)
      fetch(`/api/orders/update/${orderId}`,  {
        method: 'PUT',
        body: JSON.stringify({isReady: true}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)})
      }
    
  return (
    <div className='admin-container'>
      <h3 className='welcome-message'>Shalom Admin!</h3>
      <div className="current-orders">
          <h4 className="orders-header">Current Orders</h4>
          {activeOrders && (
              activeOrders.map((order,i) => (
                <div className="single-order" key={i}>
                  
                  <h4 className="order-details">Order Details: Order # {order._id}</h4>
                  <div className="order-pic-items">
                    <div className="order-picture">

                    </div>
                  <p className="order-items"> {order.foodItems[0].quantity} {order.foodItems[0].item}</p>
                </div>
                <div className="notes-for-kitchen">
                  <p>Notes for kitchen: {order.notes && order.notes}</p>
                </div>
                <h4 className="order-headers delivering-to">Delivering to</h4>
                <p className="address">lorem ipsum dolor sit amet</p>
                <p className="address2">lorem ipsum dolor sit amet</p>
                <div className="customer-name">
                  <h4>Customer: {order.customer_name}</h4>
                  <h4>(000) 000-0000</h4>
                </div>
                <h4 className="order-headers">Payment Method</h4>
                <p className="credit-info">Credit Card - 0202</p>

                <h4 className="order-headers">Contact-free delivery</h4>
                <p className="delivery-instructions">Call customer when you arrive</p>
                <button className="pickup-button" onClick={() => orderIsReady(order._id)}>Ready for Pickup</button>
                <h4 className="driver-info">{order.driver_name ? order.driver_name : 'Pending'}</h4>
                <h4 className="driver-info">(000) 000-0000</h4>
                </div>
                
              ))
            )}
      </div>
      <div className="out-for-delivery">
          <h4>Out for delivery</h4>
          {readyOrders && (
              readyOrders.map((order,i) => (
                <div className="single-order" key={i}>
                  
                  <h4 className="order-details">Order Details: Order # {order._id}</h4>
                  <div className="order-pic-items">
                    <div className="order-picture">

                    </div>
                  <p className="order-items"> {order.foodItems[0].quantity} {order.foodItems[0].item}</p>
                </div>
                <div className="notes-for-kitchen">
                  <p>Notes for kitchen: {order.notes && order.notes}</p>
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
                <h4 className="driver-info">Your Driver is Danny</h4>
                <h4 className="driver-info">(000) 000-0000</h4>
                </div>
              ))
            )}
      </div>
      <div className="completed-orders">
          <h4>Completed</h4>
          <div className="order-pic-items">
              <div className="order-left">
                <p>Order # 0001</p>
                <p>Customer Name</p>
              </div>
                <div className="order-right">
                    <p className="order-items">2 Large Plain Pies</p>
                </div>
            </div>
      </div>
    </div> 
  );
};

export default Admin;
