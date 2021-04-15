import React from 'react';
import '../styles/Admin.css'
const Admin = () => {
  return (
    <div className='admin-container'>
      <h3 className='welcome-message'>Shalom Admin!</h3>
      <div className="current-orders">
          <h4 className="orders-header">Current Orders</h4>
          <div className="single-order">
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
          </div>
      </div>
      <div className="out-for-delivery">
          <h4>Out for delivery</h4>
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
