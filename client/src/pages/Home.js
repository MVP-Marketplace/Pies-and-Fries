import React from 'react';
import { Container } from 'react-bootstrap';
import pizzaMonster from '../assets/pizzamonster.svg';
import pizzaPaddle from '../assets/pizzaPaddle.svg'
import '../styles/Home.css';

const home = () => {
  return (
    <div className='hompage-container'>
      <div className='box1'>
        <h1 className='heading-homepage'>Shalom, Friend!</h1>
        <p className='box-1-des'>ONE click away to your Pizza!</p>
        <p className='box-1-des'>Earn rewards as you go!</p>
      </div>
      <div className='container-midsection'>
        <div className='midsection-left'>
          <p className='midsection-des-1'>Welcome Bonus!</p>
          <p className='midsection-des-2'>
            10% off on your first order and free delivery !!
          </p>
        </div>
        <div className='midsection-right'>
          <div className="midsection-top">
          <div className='midsection-middle-text'>
            <p className='midsection-des-2'>Earn our</p>
            <p className='midsection-des-1'>Rewards!</p>
            <p className='midsection-des-2'>Are you hungry?</p>
          </div>
          <div>
            <img src={pizzaMonster} alt="pizza monster"/>
          </div>
          </div>
          <button className="midsection-btn" id="right-btn">See More+</button>
        </div>
      </div>
      <div className="hungry-cont">
        <div className="pizza-des-cont">
          <p className="heading2">Classic Cheese Pizza</p>
          <button className="midsection-btn">Details+</button>
          <div>
          <p>Delivery</p>
          <p>30 minutes</p>
          <div>
            <p>4.0</p>
            <img src="" alt="stars" />
            <button className="hungry-order-btn">Order Now</button>
          </div>

          </div>
        </div>
        <div>
          <img src={pizzaPaddle} alt="pizza"/>
        </div>
      </div>
    </div>
  );
};

export default home;
