import React from 'react';
import pizzaMonster from '../assets/pizzamonster.svg';
import pizzaPaddle from '../assets/pizzaPaddle.png';
import pizzaHero from '../assets/pizzaHero.png';
import rating from '../assets/rating.svg';
import Instagram from '../components/Instagram';
import Dino from '../assets/DinoHolder.png';

const home = () => {
  return (
    <div className="hompage-container">
      <div className="header-container">
        <h4>Shalom, Friend</h4>
        <p>ONE click away to your Pizza!
        <br/>Earn rewards as you go!</p>
      </div>
      <div className="container-midsection">
        <div className="card-container card-left">
          <div className="card-text left-text">
            <p>Discount up to</p>
            <h3>10%</h3>
            <p>for first time orders and Free delivery</p>
          </div>
          <div>
          <img src={pizzaHero} alt="pizza" className="card-img img-left"/>
          </div>
        </div>
        <div className="card-container card-right">
        <div className="card-text">
            <p>Earn our</p>
            <h3>Rewards</h3>
            <p>Are you hungry?</p>
          </div>
          <div>
          <img src={pizzaMonster} alt="pizza" className="card-img"/>
          </div>
        </div>
        </div>
        <div className="pizza-des-container">
          <div className="pizza-des-wrapper">
            <div>
            <h5>Classic Cheese Pizza</h5>
            </div>
            <div>
              <div>
              <p>Delivery <br/>
              <strong>30 min</strong>
              </p>
              <img src={rating} alt="rating" />
              </div>
              <button className="order-btn">Order Now</button>
            </div>
            
          </div>
          <img src={pizzaPaddle} alt="pizza on paddle"  id="pizza-pad-img"/>
        </div>
        <div className="game-container">
          <img src={Dino} alt="dino game" id="dino-img"/>
        </div>
        <div className="instagram-container">
          <h5>Tag us! @PiesandFries</h5>
          <Instagram />
        </div>
      </div>

  );
};

export default home;
