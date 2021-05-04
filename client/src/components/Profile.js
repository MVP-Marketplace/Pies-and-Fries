import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import face from '../assets/face.svg';

const Profile = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPersonalInfo, setDisplayPersonalInfo] = useState(false);
  const { userState } = useContext(AppContext);
  const [user, setUser] = userState;
  return (
    <>
      <div className='hm-profile-card'>
        <img src={face} alt='face icon no eye' className='hm-profile-image' />
        <h3
          className='hm-profile-title'
          onClick={() => setDisplayModal(!displayModal)}
        >
          Profile
        </h3>
      </div>
      <div className={`profiledropdown-content ${displayModal ? 'show' : ''}`}>
        <ul className='profile-info-list-container'>
          <li onClick={() => setDisplayPersonalInfo(!displayPersonalInfo)}>
            Personal Info
          </li>
          <div
            className={`profile-personal-info ${
              displayPersonalInfo ? 'show' : ''
            }`}
          >
            <p className='p-u-email'>Email:</p>
            <p className='profile-user-email'>{user && user.email}</p>
            <p className='p-u-number'>Number:</p>
            <p className='profile-user-number'>{user && user.number}</p>
            <p className='p-u-address'>Address</p>
            <p className='profile-user-address'>{user && user.address}</p>
          </div>
          <li>Payment Info</li>
          <li>Password</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
