import React from 'react';
import Shield from '../assets/shield.svg'

const Legal = () => {
  return (
    <div className='hm-legal-card'>
      <img src={Shield} alt="legal"className='hm-legal-image'/>
      <h3 className='hm-legal-title'>Legal</h3>
    </div>
  );
};

export default Legal;
