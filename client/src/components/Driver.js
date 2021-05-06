import React, {useState, useEffect, useContext} from 'react';
import '../styles/Driver.css'
import {AppContext} from '../context/AppContext'
import Order from './Order'
import OrderPreview from './OrderPreview'
import DriverOrderDetails from './DriverOrderDetails'
const Driver = () => {
  const {userState} = useContext(AppContext)
  const[user,setUser] = userState
  const[readyOrders,setReadyOrders] = useState(null)
  const[driverOrders,setDriverOrders] = useState(null)
  const[driverCompleted,setDriverCompleted] = useState(null)
  const[currentOrder,setCurrentOrder] = useState(null)
  const[showSingleOrder,setShowSingleOrder] = useState(false)
  const[orderFilter,setOrderFilter] = useState('availible')
      const getReadyItems = () => {
        fetch('/api/orders/getreadyorders', {'credentials': 'include'}, {
          headers: {
            driver_id: user._id
          }
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          setReadyOrders(res)
        })
        .catch(err => {
            console.log(err)})
      }

    const getDriverItems = () => {
      fetch(`/api/orders/${user._id}/getorders`, {'credentials': 'include'}, {
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setDriverOrders(res)
      })
      .catch(err => {
          console.log(err)})
    }
    const getDriverCompleted = () => {
      fetch(`/api/orders/${user._id}/getcompleted`, {'credentials': 'include'}, {
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setDriverCompleted(res)
      })
      .catch(err => {
          console.log(err)})
    }
    
    const getAllOrders = () => {
      getReadyItems()
      getDriverItems()
      getDriverCompleted()
    }
    useEffect(() => {
      getAllOrders()
    },[])

    const assignOrderToDriver = (orderId) => {
      // console.log(orderId)
      fetch(`/api/orders/update/${orderId}`,  {
        method: 'PUT',
        body: JSON.stringify({driver_id: user._id, driver_name: user.name}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(res => {
        getAllOrders()
      })
      .catch(err => {
        console.log(err)})
      }
      const completeDelivery = (orderId) => {
        fetch(`/api/orders/update/${orderId}`,  {
          method: 'PUT',
          body: JSON.stringify( {delivered:true}),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(res => res.json())
        .then(res => {
          getAllOrders()
        })
        .catch(err => {
          console.log(err)})
      }
    const viewSingleOrder = (order) => {
        setCurrentOrder(order)
        setShowSingleOrder(!showSingleOrder)
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
    <div className='driver-container'>
      {!showSingleOrder ? (
        <>
      <h3 className='welcome-message'>Shalom Driver!</h3>
      <div className="driverFilters">
        <button className={orderFilter === 'availible' ? "active": "filterButton"} onClick={() => setOrderFilter('availible')}>Availible</button>
        <button className={orderFilter === 'mydeliveries' ? "active": "filterButton"} onClick={() => setOrderFilter('mydeliveries')}>Picked Up</button>
        <button className={orderFilter === 'mycompleted' ? "active": "filterButton"} onClick={() => setOrderFilter('mycompleted')}>Completed</button>
      </div>
    
   
      {orderFilter === 'availible' && (
        <div className="current-orders">
            {readyOrders && (
                readyOrders.map((order,i) => (
                  <OrderPreview order={order} preview={true} viewSingleOrder={viewSingleOrder} assignOrderToDriver={assignOrderToDriver}/>
                  // <div className="single-order" key={i} onClick={() => viewSingleOrder(order)}>  
                  //   <h4 className="order-details">Order Details: Order # {order._id}</h4>
                  //   <div className="order-pic-items">
                  //     <div className="order-picture">
                  //     </div>
                  //     <div>
                  //         <p className="order-items"> {order.foodItems[0].quantity} {order.foodItems[0].item}</p>
                  //         <button className="pickup-button" onClick={() => assignOrderToDriver(order._id)}>Pick Up</button>
                  //     </div>
                    
                  //     </div>
                  // </div>
                  
                ))
              )}
          
        </div> 
      )}
      {orderFilter === 'mydeliveries' && (
        <div className="current-orders">
            {driverOrders && (
                driverOrders.map((order,i) => (
                  <OrderPreview order={order} preview={true} viewSingleOrder={viewSingleOrder}/>
                  // <div className="single-order" key={i} onClick={() => viewSingleOrder(order)}>  
                  //   <h4 className="order-details">Order Details: Order # {order._id}</h4>
                  //   <div className="order-pic-items">
                  //     <div className="order-picture">
                  //     </div>
                  //     <div>
                  //         <p className="order-items"> {order.foodItems[0].quantity} {order.foodItems[0].item}</p>
                  //         <button className="pickup-button" onClick={() => assignOrderToDriver(order._id)}>Pick Up</button>
                  //     </div>
                    
                  //     </div>
                  // </div>
                  
                ))
              )}
          
        </div> 
      )}
      {orderFilter === 'mycompleted' && (
        <div className="current-orders">
            {driverCompleted && (
                driverCompleted.map((order,i) => (
                  <OrderPreview order={order} preview={true} viewSingleOrder={viewSingleOrder}/>
                  // <div className="single-order" key={i} onClick={() => viewSingleOrder(order)}>  
                  //   <h4 className="order-details">Order Details: Order # {order._id}</h4>
                  //   <div className="order-pic-items">
                  //     <div className="order-picture">
                  //     </div>
                  //     <div>
                  //         <p className="order-items"> {order.foodItems[0].quantity} {order.foodItems[0].item}</p>
                  //         <button className="pickup-button" onClick={() => assignOrderToDriver(order._id)}>Pick Up</button>
                  //     </div>
                    
                  //     </div>
                  // </div>
                  
                ))
              )}
          
        </div> 
      )}
      </>
    ):
    <>
    <button onClick={() => setShowSingleOrder(false)}>Back</button>
       <DriverOrderDetails order = {currentOrder} viewSingleOrder={viewSingleOrder} completeDelivery={completeDelivery}/>
    </>
   }
    </div> 
  );
};

export default Driver;
