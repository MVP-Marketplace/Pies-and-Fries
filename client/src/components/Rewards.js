import React, { useState } from 'react';
import PizzaPieRewards from '../assets/PizzaPieRewards.svg';

const Rewards = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className='hm-rewards-card'>
      <div className='hm-rewards-image'></div>
      <h3
        className='hm-rewards-title'
        onClick={() => setDisplayModal(!displayModal)}
      >
        Rewards
      </h3>
      <div className={`ModalRewards ${displayModal ? 'Show' : ''}`}>
        <button
          className='Close'
          onClick={() => setDisplayModal(!displayModal)}
        >
          X
        </button>
        <h3 className='reward-heading'>Your Remaining Rewards</h3>
        <p className='rewards-text-des'>Redeem 10% off welcome coupon</p>
        <p className='rewards-text-des2'>
          you have 4 more orders before you earn the 7th pie on us.Order more
          earn more!
        </p>
        <img
          src={PizzaPieRewards}
          alt='pizza-reward-logo'
          className='reward-logo'
        />
      </div>
    </div>
  );
};

export default Rewards;
