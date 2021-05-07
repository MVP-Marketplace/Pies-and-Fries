import React from 'react';
import '../assets/Customerdetails.svg';

const CustomerDetails = () => {
  return (
    <div className='hm-Customer-detail-card'>
      <img
        src={require('../assets/Customerdetails.svg').default}
        alt='question mark'
        className='hm-Customer-detail-image'
      />
      <h3 className='hm-Customer-detail-title'>Customer Details</h3>
    </div>
  );
};
export default CustomerDetails;
