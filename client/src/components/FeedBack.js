import React, { useState } from 'react';
import Happyface from '../assets/Happyface.svg';
import Netural from '../assets/Neutral.svg';
import SadFace from '../assets/SadFace.svg';
import TextSMS from '../assets/textsms.svg';

const FeedBack = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className='hm-feedback-card'>
      <img src={TextSMS} alt='text' className='hm-feedback-image' />
      <h3
        className='hm-feedback-title'
        onClick={() => setDisplayModal(!displayModal)}
      >
        Give us Feedback
      </h3>
      <div className={`ModalFeedback ${displayModal ? 'Show' : ''}`}>
        <button
          className='Close'
          onClick={() => setDisplayModal(!displayModal)}
        >
          X
        </button>
        <h3 className='feedback-heading'>Feedback Comments:</h3>
        <div className='feedback-img-container'>
          <img
            src={Happyface}
            alt='feedback-happy-face-logo'
            className='feedback-happy-face-logo'
          />
          <img
            src={Netural}
            alt='feedback-netural-face-logo'
            className='feedback-netural-face-logo'
          />
          <img
            src={SadFace}
            alt='feedback-sad-face-logo'
            className='feedback-sad-face-logo'
          />
        </div>
        <label for='feedback' className='feedback-label'>
          How was your experience?
        </label>

        <textarea
          id='feedback'
          className='feedback-textarea'
          name='feedback'
          rows='4'
          cols='-6'
          placeholder='How can we improve your experience?'
        ></textarea>
        <button className='feedback-submit-btn'>Submit</button>
      </div>
    </div>
  );
};

export default FeedBack;
