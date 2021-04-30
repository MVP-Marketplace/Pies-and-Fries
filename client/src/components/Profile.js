import React, { useState } from 'react';
import face from '../assets/face.svg';

const Profile = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPersonalInfo, setDisplayPersonalInfo] = useState(false);
  return (
    <>
      <div className='hm-profile-card'>
          <img src={face} alt="face icon no eye" className='hm-profile-image'/>
        <h3
          className='hm-profile-title'
          onClick={() => setDisplayModal(!displayModal)}
        >
          Profile
        </h3>
      </div>
      <div className={`profiledropdown-content ${displayModal ? 'show' : ''}`}>
        <ul>
          <li onClick={() => setDisplayPersonalInfo(!displayPersonalInfo)}>
            Personal Info
          </li>
          <div
            className={`profile-personal-info ${
              displayPersonalInfo ? 'show' : ''
            }`}
          >
            <label for='Email'>Email:</label>
            <input type='text' id='Email' name='Email'></input>
            <label for='Phone-number'>Phone:</label>
            <input type='number' id='Phone-number' name='Phone-number'></input>
            <label for='Password'>Password:</label>
            <input type='Password' id='password' name='password'></input>
          </div>
          <li>Payment Info</li>
          <li>Password</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
