import React, { useState } from 'react';
import CartIcon from '../assets/CartIcon.svg';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Checkout from '../components/Checkout';
export const Cart = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <img
        src={CartIcon}
        alt='cart'
        className='hm-cart'
        onClick={() => setDisplayModal(!displayModal)}
      />
      <div className={`Modal ${displayModal ? 'Show' : ''}`}>
        <div className='pc-adderss-card'>
          <div className='pc-location-container'>
            <p className='pc-location-name'>Home</p>
            <p className='pc-address'>1723 SunDown Road</p>
          </div>
          <button className='pc-address-edit-btn'>Edit</button>
        </div>
        <h3 className='cart-heading'>Items in Cart:</h3>
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

        <Link to='/paymentconfirmation'>
          <Checkout
            className='checkout-btn'
            onClick={() => setDisplayModal(!displayModal)}
          />
        </Link>
        <button
          className='Close'
          onClick={() => setDisplayModal(!displayModal)}
        >
          X
        </button>
      </div>
      <div
        className={`Overlay ${displayModal ? 'Show' : ''}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
    </>
  );
};
export default Cart;
