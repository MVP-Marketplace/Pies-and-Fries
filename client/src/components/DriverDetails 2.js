import React from 'react';
import '../assets/Driverdetails.svg';

const DriverDetails = () => {
  return (
    <div className='hm-driver-details-card'>
      <img
        src={require('../assets/Driverdetails.svg').default}
        alt='question mark'
        className='hm-driver-details-image'
      />
      <h3 className='hm-driver-details-title'>Driver Details</h3>
    </div>
  );
};

export default DriverDetails;
