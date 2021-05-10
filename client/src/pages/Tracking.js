import React from 'react';
import Tracker from '../components/Tracker';
import '../assets/Pizzagreyscale.svg';

const TrackingPage = () => {
  return (
    <div>
      <div className='tracking-title-continer'>
        <h3 className='tracking-title'> Hooray! your Order has been placed!</h3>
      </div>
      <Tracker className='tracker' />
      <div className='tracking-delivery-container'>
        {' '}
        <div className='tracking-location-container'>
          <p className='tracking-location-name'>Delivery to</p>
          <p className='tracking-address'>1723 SunDown Road</p>
        </div>
        <div className='tracking-contact-delivery-des'>
          <p className='tracking-contact-type-heading'>Contact Free Delivery</p>
          <p className='tracking-contact-type-des'>
            Driver will drop off order and notify you
          </p>
        </div>
      </div>
      <div className='rewards-tracking-cn'>
        <p className='reward-earned-tracking'>Rewards Earned!</p>
        {/* <div className='tracking-rewards-img-con'>
          <img
            className='rewards-pizza-logo'
            src={require('../assets/Pizzagreyscale.svg').default}
            alt='pizza-logo'
          />
          <p>Get your next pie on us!</p>
        </div> */}
      </div>
      <div className='tracking-questions-cn'>
        <button className='call-restaurtant-btn'>
          {' '}
          Call Restaurant: (672)000-8796
        </button>
      </div>
    </div>
  );
};

export default TrackingPage;
