import React, { useState } from 'react';
import menu from '../assets/menu.svg';
import UserInfoCard from './UserInfoCard';
import Profile from './Profile';
import NotificationPreferences from './NotificationPreferences';
import Rewards from './Rewards';
import InviteFriends from './InviteFriends';
import FeedBack from './FeedBack';
import Legal from './Legal';
import Help from './Help';
import Logout from './Logout';
import logo from '../assets/logo.svg';
import Cart from '../components/Cart';

const HamburgerMenu = () => {
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);
  return (
    <>
      <img
        src={menu}
        alt='menu-icon'
        className='hamburger-menu-icon'
        onClick={() => setDisplayHamburgerMenu(!displayHamburgerMenu)}
      />
      <div className={`HamburgerMenu ${displayHamburgerMenu ? 'Show' : ''}`}>
        <div className='hm-top-row-container'>
          <img
            src={menu}
            alt='menu-icon'
            className='hamburger-menu-icon'
            onClick={() => setDisplayHamburgerMenu(!displayHamburgerMenu)}
          />
          <img src={logo} alt='logo' className='hm-logo' />
          <Cart />
        </div>

        <UserInfoCard />
        <Profile />
        <NotificationPreferences />
        <Rewards />
        <InviteFriends />
        <FeedBack />
        <Legal />
        <Help />
        <Logout />
      </div>
    </>
  );
};

export default HamburgerMenu;
