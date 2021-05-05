import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const Order = () => {
    let { id } = useParams();
    const [order, setOrder] = useState({});
    console.log(id);
  
    useEffect(() => {
      fetch(`/api/orders/${id}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }, []);
    
    return (
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
      <p className="address">{order.user.address}</p>
      {/* <p className="address2">lorem ipsum dolor sit amet</p> */}
      <div className="customer-name">
        <h4>{order.user.name}</h4>
        <h4>{order.user.phoneNumber}</h4>
      </div>
      <h4 className="order-headers">Payment Method</h4>
      <p className="credit-info">Credit Card - 0202</p>

      <h4 className="order-headers">Contact-free delivery</h4>
      <p className="delivery-instructions">Call customer when you arrive</p>
      <h4 className="driver-info">Your Driver is {order.driver.name}</h4>
      <h4 className="driver-info">{order.driver.phoneNumber}</h4>
      </div>
    )
}

export default Order
