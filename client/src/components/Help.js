import React from 'react';
import Question from '../assets/help.svg'

const Help = () => {
  return (
    <div className='hm-help-card'>
      <img src={Question} alt="question mark" className='hm-help-image'/>
      <h3 className='hm-help-title'>Help</h3>
    </div>
  );
};

export default Help;
