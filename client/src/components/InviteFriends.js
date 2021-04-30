import React from 'react';
import Friends from '../assets/Friends.svg';

const InviteFriends = () => {
  return (
    <div className='hm-if-cards'>
      <img src={Friends} alt="friends" className='hm-if-image'/>
      <h3 className='hm-if-title'>Invite Friends</h3>
    </div>
  );
};

export default InviteFriends;
