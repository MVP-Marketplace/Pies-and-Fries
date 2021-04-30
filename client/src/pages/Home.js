import React from 'react';
import { Container } from 'react-bootstrap';
import pizzaMonster from '../assets/pizzamonster.svg';
import pizzaPaddle from '../assets/pizzaPaddle.png';
import pizzaHero from '../assets/pizzaHero.png';
// import '../styles/Home.css';

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
          <div className='midsection-middle-text'>
          <p className='midsection-des-1'>Welcome Bonus!</p>
          <p className='midsection-des-2'>
            10% off on your first order and free delivery !!
          </p>
          </div>
          
          <img src={pizzaHero} alt="pizza" id="pizza-img"/>
        </div>
        <div className='midsection-right'>
    
          <div className='midsection-middle-text'>
            <p className='midsection-des-2'>Earn our</p>
            <p className='midsection-des-1'>Rewards!</p>
            <p className='midsection-des-2'>Are you hungry?</p>
          </div>
          <div>
            <img src={pizzaMonster} alt="pizza monster" />
          </div>
          </div>
      </div>
      <div className='order-section-container'>

      </div>
    </div>
  );
};

export default home;
