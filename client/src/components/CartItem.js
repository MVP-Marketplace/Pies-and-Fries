import React from 'react';

const CartItem = () => {
  return (
    <div className='cart-card-container'>
      <div className='cart-card-left-section'>
        <div className='img-place-holder'></div>
      </div>
      <div className='cart-card-middle-section'>
        <p className='cart-card-product-name'>Chesse Pizza</p>
      </div>
      <div className='cart-card-right-section'>
        <p className='cart-card-product-price'>$16.00</p>
        <p className='cart-card-remove-product'>Remove</p>
      </div>
    </div>
  );
};

export default CartItem;
