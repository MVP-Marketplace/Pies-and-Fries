import React from 'react';

const CartItem = () => {
  return (
    <div className='cart-card-container'>
      <div className='cart-card-left-section'>
        <div className='img-place-holder'></div>
      </div>
      <div className='cart-card-right-section'>
        <p className='cart-card-product-name'>Large Plain Pie</p>
        <div className='quanity-container'>
          <p className='quanity--'>-</p>
          <p className='quanity-number'>2</p>
          <p className='quanity--'>+</p>
        </div>
        <p className='cart-card-remove-product'>$16.00</p>
      </div>
    </div>
  );
};

export default CartItem;
