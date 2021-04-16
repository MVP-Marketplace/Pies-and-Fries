import React from 'react';
import CartItem from '../components/CartItem';
import Checkout from '../components/Checkout';

const PaymentConfirmation = () => {
  return (
    <div className='pc-container'>
      <div className='pc-adderss-card'>
        <div className='pc-location-container'>
          <p className='pc-location-name'>Home</p>
          <p className='pc-address'>1723 SunDown Road</p>
        </div>
        <button className='pc-address-edit-btn'>Edit</button>
      </div>
      <h3 className='pc-cart-item-heading'>Order</h3>
      <CartItem />
      <div className='pc-delivery-type-container'>
        <div className='pc-contact-free-delivery-container'>
          <div className='pc-contact-delivery-des'>
            <p className='pc-contact-type-heading'>Contact Free Delivery</p>
            <p className='pc-contact-type-des'>
              Driver will drop off order and notify you
            </p>
          </div>

          <div className='pc-contact-checkbox'>
            <input
              className='pc-check-delivery-type'
              class='pc-check-delivery-type'
              type='checkbox'
              value=''
              id='pc-check-delivery-type-1'
            />
          </div>
        </div>
        <div className='pc-door-delivery-container'>
          <div className='pc-contact-delivery-des'>
            <p className='pc-contact-type-heading'>Door Delivery</p>
            <p className='pc-contact-type-des'>
              Driver will drop notify you and meet at your door
            </p>
          </div>
          <div className='pc-contact-checkbox'>
            <input
              className='pc-check-delivery-type'
              class='pc-check-delivery-type'
              type='checkbox'
              value=''
              id='pc-check-delivery-type-2'
            />
          </div>
        </div>
      </div>
      <Checkout />
    </div>
  );
};

export default PaymentConfirmation;
