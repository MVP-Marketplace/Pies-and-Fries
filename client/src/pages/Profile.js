import React from 'react';
import { Button } from 'react-bootstrap';
import {useEffect, useState} from 'react'

const Profile = (props) => {
  const[userInfo, setUserInfo] = useState(null)
  const getUserInfo = () => {
    fetch('./api/users/me', {'credentials': 'include'})
    .then(res => res.json())
    .then(res => {
      setUserInfo(res)
      props.setUserLoginIn(true)
    })
    .catch(e => {
      console.log(e)
    })
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div>
      <img src={require('../assets/logo.svg').default} alt="pies and fries logo" className="profile-logo"/>
      <div>
        <h1>{userInfo.name}</h1>
        <h3>{userInfo.email}}</h3>
      </div>
      <hr />
      <div>
        <h1>Profile</h1>
        <ul>
          <li>Personal Info</li>
          <li>Payment Options</li>
          <li>Transaction History</li>
        </ul>
      </div>
      <div>
        <h1>Notification Preferences</h1>
      </div>
      <div>
        <h1>Rewards</h1>
      </div>
      <div>
        <h1>Favorite</h1>
      </div>
      <div>
        <h1>Help</h1>
      </div>
      <Button type="button">Log Out</Button>
    </div>

    
  );
};

export default Profile;
