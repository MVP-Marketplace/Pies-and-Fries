import React, {useState, useEffect, useContext} from 'react';
import '../styles/Driver.css'
import {AppContext} from '../context/AppContext'
import OrderPreview from './OrderPreview'
import DriverOrderDetails from './DriverOrderDetails'
// import MapboxDirections from './MapboxDirections'
const Driver = () => {
  const {userState} = useContext(AppContext)
  const[user] = userState
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
      // eslint-disable-next-line 
    },[])

    const assignOrderToDriver = (orderId) => {
      // console.log(orderId)
      fetch(`/api/orders/driver/assign/${orderId}`,  {
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
    //update
    
  return (
    <div className='driver-container'>
      {!showSingleOrder ? (
        <>
        {/* <MapboxDirections /> */}
      <h3 className='welcome-message'>Shalom Driver!</h3>
      <div className="driverFilters">
        <button className={orderFilter === 'availible' ? "active": "filterButton"} onClick={() => setOrderFilter('availible')}>Available</button>
        <button className={orderFilter === 'mydeliveries' ? "active": "filterButton"} onClick={() => setOrderFilter('mydeliveries')}>Picked Up</button>
        <button className={orderFilter === 'mycompleted' ? "active": "filterButton"} onClick={() => setOrderFilter('mycompleted')}>Completed</button>
      </div>
    
   
      {orderFilter === 'availible' && (
        <div className="current-orders">
            {readyOrders && (
                readyOrders.map((order,i) => (
                  <OrderPreview order={order} preview={true} viewSingleOrder={viewSingleOrder} assignOrderToDriver={assignOrderToDriver}/>

                ))
              )}
          
        </div> 
      )}
      {orderFilter === 'mydeliveries' && (
        <div className="current-orders">
            {driverOrders && (
                driverOrders.map((order,i) => (
                  <OrderPreview order={order} preview={true} viewSingleOrder={viewSingleOrder}/>

                ))
              )}
          
        </div> 
      )}
      {orderFilter === 'mycompleted' && (
        <div className="current-orders">
            {driverCompleted && (
                driverCompleted.map((order,i) => (
                  <OrderPreview order={order} preview={true} viewSingleOrder={viewSingleOrder}/>
                ))
              )}
          
        </div> 
      )}
      </>
    ):
    <>
    <button className="back-button"onClick={() => setShowSingleOrder(false)}>Back</button>
       <DriverOrderDetails order = {currentOrder} viewSingleOrder={viewSingleOrder} completeDelivery={completeDelivery}/>
    </>
   }
    </div> 
  );
};

export default Driver;
