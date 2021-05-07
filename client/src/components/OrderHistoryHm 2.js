import React from 'react';
import '../assets/OrderHistory.svg';

const OrderHistoryHm = () => {
  return (
    <div className='hm-order-history-card'>
      <img
        src={require('../assets/OrderHistory.svg').default}
        alt='question mark'
        className='hm-order-history-image'
      />
      <h3 className='hm-order-history-title'>Order History</h3>
    </div>
  );
};

export default OrderHistoryHm;
