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
        <UserInfoCard />
        <Profile />
        <NotificationPreferences />
        <Rewards />
        <InviteFriends />
        <FeedBack />
        <Legal />
        <Help />
      </div>
    </>
  );
};

export default HamburgerMenu;
