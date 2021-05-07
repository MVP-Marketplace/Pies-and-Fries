import React, {useState, useEffect} from 'react';
import Order from './Order'
import '../styles/Admin.css'
const Admin = () => {
  const[activeOrders,setActiveOrders] = useState(null)
  const [readyOrders, setReadyOrders] = useState(null)
  const[completedOrders, setCompletedOrders] = useState(null)
  const[orderFilter, setOrderFilter] = useState('active')

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
      const getCompletedOrders = () => {
        fetch('/api/orders/completed',  {'credentials': 'include'})
        .then(res => res.json())
        .then(res => {
          console.log(res)
          setCompletedOrders(res)
        })
        .catch(err => {
          console.log(err)
        })
      }
      
      const updateOrders = () => {
        getActiveItems()
        getReadyOrders()
        getCompletedOrders()
      }
     
    useEffect(() => {
      updateOrders()
      // eslint-disable-next-line 
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
        updateOrders()
      })
      .catch(err => {
        console.log(err)})
      }
    
  return (
    <div className='admin-container'>
      <h3 className='welcome-message'>Shalom Admin!</h3>
      <div className="adminFilters">
        <button className={orderFilter === 'active' ? "active": "filterButton"} onClick={() => setOrderFilter('active')}>Current Orders</button>
        <button className={orderFilter === 'ready' ? "active": "filterButton"} onClick={() => setOrderFilter('ready')}>Ready Orders</button>
        <button className={orderFilter === 'completed' ? "active": "filterButton"} onClick={() => setOrderFilter('completed')}>Completed Orders</button>
      </div>
      
          {orderFilter === 'active' && (
            <div className="current-orders">
            {activeOrders && (
                activeOrders.map((order,i) => (
                  <Order order = {order} orderIsReady={orderIsReady} />            
                ))
              )}
          </div> 
          )}
         {orderFilter === 'ready' && (
            <div className="current-orders">
            {readyOrders && (
                readyOrders.map((order,i) => (
                  <Order order = {order}/>            
                ))
              )}
          </div> 
          )}
          {orderFilter === 'completed' && (
            <div className="current-orders">
            {completedOrders && (
                completedOrders.map((order,i) => (
                  <Order order = {order} />            
                ))
              )}
          </div> 
          )}
    </div> 
  );
};

export default Admin;
