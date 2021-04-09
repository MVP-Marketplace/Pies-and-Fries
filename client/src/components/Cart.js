import React, { useState } from 'react';
import CartIcon from '../assets/CartIcon.svg';

export const Cart = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <img
        src={CartIcon}
        alt='cart'
        onClick={() => setDisplayModal(!displayModal)}
      />
      <div className={`Modal ${displayModal ? 'Show' : ''}`}>
        <h3 className='cart-heading'>Cart</h3>
        <div className='cart-card-container'>
          <div className='cart-card-left-section'>
            <div className='img-place-holder'></div>
          </div>
          <div className='cart-card-middle-section'>
            <p className='cart-card-product-name'>Chesse Pizza</p>
          </div>
          <div className='cart-card-right-section'>
            <p className='cart-card-product-price'>$16.00</p>
          </div>
        </div>
        <button className='checkout-btn'>Checkout</button>
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
