import React from 'react';
import pizzaHero from '../assets/pizzaHero2.png';
import rating from '../assets/rating.svg';
import pizzaPaddle from '../assets/pizzaPaddle.svg';
import pizzaMonster from '../assets/pizzamonster.svg';
import pizzaSlice from '../assets/pizzaSlice.svg';
import PreviousOrder from '../components/PreviousOrder.js';

import { Carousel, Image, Card } from 'react-bootstrap';

const AuthHome = () => {
  return (
    <div className='homepage-container'>
      <Card className='hero-wrapper'>
        <Card.Img src={pizzaHero} className='hero-img' />
        <Card.ImgOverlay className='hero-container'>
          <Card className='hero-text'>
            <Card.Title className='hero-title'>
              ONE click away to your Pizza!
              <br />
              Earn rewards as you go!
            </Card.Title>
          </Card>
        </Card.ImgOverlay>
      </Card>
      <div className='previous-order-wrapper'>
        <h3>Reordering</h3>
        <p>One Click Express Reorder</p>
       <PreviousOrder />
      </div>
      <div className='pizza-wrapper'>
        <Card className='pizza-card left-card'>
          <h3>Classic Plain Cheese Pie</h3>
          <p>Estimated Delivery</p>
          <p>30 minutes</p>
          <img src={rating} alt='rating' id='rating-img' />
          <button className='btn-order'>Order Now!</button>
        </Card>
        <Card className='pizza-card right-card'>
          <Card.Img src={pizzaPaddle} alt='pizza' />
        </Card>
      </div>
      <Carousel className='carousel-wrapper'>
        <Carousel.Item className='jumbotron first-carousel'>
          <Image src={pizzaSlice} />
          <Carousel.Caption>
            <p> Discounts up to</p>
            <h3>10%</h3>
            <p>for first time orders!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='jumbotron second-carousel'>
          <Carousel.Caption>
            <p>Earn our</p>
            <h3>Rewards</h3>
            <p>today!</p>
          </Carousel.Caption>
          <Image src={pizzaMonster} alt='pizza with monster horns' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AuthHome;
