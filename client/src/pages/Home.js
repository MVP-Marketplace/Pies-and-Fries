import React from 'react';
import pizzaHero from '../assets/pizzaHero2.png';
import pizzaPaddle from '../assets/pizzaPaddle.svg'
import pizzaMonster from '../assets/pizzamonster.svg';
import Instagram from '../components/Instagram';
import { Carousel, Container,Image, Button, Card, Jumbotron } from 'react-bootstrap';

const home = () => {
  return (
    <div className="homepage-container">
      <Card className="hero-wrapper">
        <Card.Img src={pizzaHero} className="hero-img"/>
        <Card.ImgOverlay className="hero-container">
        <Card className="hero-text">
          <Card.Title className="hero-title">
            ONE click away to your Pizza!
            <br/>Earn rewards as you go!
          </Card.Title>
        </Card>

        </Card.ImgOverlay>
      </Card>
      <div className="pizza-wrapper d-flex">
        <Card.Body>
        <Card className="pizza-card left-card">
          <h1>Classic Cheese Pizza</h1>
          <p></p>
          <img src="" alt="rating"/>
          <Button>Order Now!</Button>
          </Card>
          <Card className="pizza-card left-card">
            <Card.Img src={pizzaPaddle} alt="pizza"/>
          </Card>
          </Card.Body>
      </div>
      <Carousel>
        <Carousel.Item>
           <Image src={pizzaMonster} />
        </Carousel.Item>
        <Carousel.Item>
        <Jumbotron fluid>
          <div> 
            <p>Earn our</p>
            <h3>Rewards</h3>
            <p>today!</p>
          </div>
          <div>
            <img src={pizzaMonster} alt="pizza with monster horns"/>
          </div>
            
        </Jumbotron>  
        </Carousel.Item>

      </Carousel>
      <Card>
        <h1>
          Tag us #PIESANDFRIES
        </h1>
        <Instagram /> 
      </Card>

    </div>

  );
};

export default home;
