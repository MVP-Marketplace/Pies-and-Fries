import React from 'react';
import pizzaMonster from '../assets/pizzamonster.svg';
import pizzaPaddle from '../assets/pizzaPaddle.png';
import pizzaHero from '../assets/pizzaHero.png';
import rating from '../assets/rating.svg';
import Instagram from '../components/Instagram';
import Dino from '../assets/DinoHolder.png';
import { Carousel, Jumbotron,Container,Image, Button } from 'react-bootstrap';

const home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>ONE click away to your Pizza!</h1>
        <Button>Order Now</Button>

      </Jumbotron>
      <Container>
          <h1>Classic Cheese Pizza</h1>
          <p></p>
          <img src={rating} alt="rating"/>
      </Container>
      <Carousel>
        <Carousel.Item>
          <h5>Welcome Bonuse</h5>
           <Image />
        </Carousel.Item>
        <Carousel.Item>
          <h5>Get our Rewards</h5>
          <Image />
        </Carousel.Item>

      </Carousel>
      <Container>
        <h1>
          Tag us #PIESANDFRIES
        </h1>
        <Instagram /> 
      </Container>

    </div>

  );
};

export default home;
