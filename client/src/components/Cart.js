import React, { useState } from 'react';
import CartIcon from '../assets/CartIcon.svg';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
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
        <h3 className='cart-heading'>Items in Cart:</h3>
        <CartItem />
        <Link to='/paymentconfirmation'>
          <button
            className='checkout-btn'
            onClick={() => setDisplayModal(!displayModal)}
          >
            Checkout
          </button>
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
