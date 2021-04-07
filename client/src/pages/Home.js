import React from 'react';
import { Container } from 'react-bootstrap';

const home = () => {
  return (
    <div>
      <h1 className='heading-homepage'>Shalom, Friend!</h1>
      <div className='box1'>
        <h2 className='heading-2'>Are you hungry?</h2>
      </div>
      <div className='container-midsection'>
        <div className='midsection-left'></div>
        <div className='midsection-right'></div>
      </div>
      <div className='best-pizza-box'>
        <h2 className='heading3'>BEST pizza in the FASTEST way!</h2>
      </div>
      <div className='reward-box'>
        <h2 className='heading4'>Get our REWARDS!</h2>
      </div>
      {/* I dont think we will need this anymore however im not sure just commenting it out for now */}
      {/* <Container>
        <h2>#PIESANDFRIES</h2>
      </Container> */}
    </div>
  );
};

export default home;
