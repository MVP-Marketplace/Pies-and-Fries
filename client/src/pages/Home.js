import React from 'react';
import { Container } from 'react-bootstrap';

const home = () => {
  return (
    <div>
      <h1 className='heading-homepage'>Shalom, Friend!</h1>
      <div className='box1'></div>
      <h2 className='heading2'>Get our REWARDS!</h2>
      <div className='heading-cont'>
        <h2 className='heading-3'>Your top 3</h2>
      </div>
      <div className='container-midsection'>
        <div className='midsection-left'>
          <p className='midsection-addto-cart-btn'>+</p>
        </div>
        <div className='midsection-middle'>
          <p className='midsection-addto-cart-btn'>+</p>
        </div>
        <div className='midsection-right'>
          <p className='midsection-addto-cart-btn'>+</p>
        </div>
      </div>
      <div className='picked-for-you-section'>
        <h2 className='heading4'>Picked For You</h2>
        <div className='product-card'>
          <div className='product-card-left'>
            <p className='product-card-des'>
              Lorem ipsum dolor sit amet
              <br />
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className='product-card-right'>
            <p className='product-card-addto-cart-btn'>+</p>
          </div>
        </div>
        <div className='product-card'>
          <div className='product-card-left'>
            <p className='product-card-des'>
              Lorem ipsum dolor sit amet
              <br />
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className='product-card-right'>
            <p className='product-card-addto-cart-btn'>+</p>
          </div>
        </div>
        <div className='product-card'>
          <div className='product-card-left'>
            <p className='product-card-des'>
              Lorem ipsum dolor sit amet
              <br />
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className='product-card-right'>
            <p className='product-card-addto-cart-btn'>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
