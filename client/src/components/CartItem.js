import React from 'react';

const CartItem = props => {
  return (
    <div className='cart-card-container'>
      <div className='cart-card-left-section'>
        <img
          src={require(`../assets/pizzaBackground.svg`).default}
          className='pizza-pic-cart'
        />
      </div>
      <div className='cart-card-right-section'>
        <p className='cart-card-product-name'>Large Plain Pie</p>
        <div className='quanity-container'>
          <p
            className='quanity--'
            onClick={() => {
              props.setQuantity(props.quantity - 1);
              props.getTotal();
            }}
          >
            -
          </p>
          <p className='quanity-number'>{props.quantity}</p>
          <p
            className='quanity--'
            onClick={() => {
              props.setQuantity(props.quantity + 1);
              props.getTotal();
            }}
          >
            +
          </p>
        </div>
        <p className='cart-card-remove-product'>${props.total}</p>
      </div>
    </div>
  );
};

export default CartItem;
