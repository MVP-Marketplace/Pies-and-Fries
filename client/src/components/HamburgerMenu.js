import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {Link} from 'react-router-dom'
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
import CurrentOrderHm from './CurrentOrderHm';
import OrderHistoryHm from './OrderHistoryHm';
import CustomerDetails from './CustomerDetails';
import DriverDetails from './DriverDetails';

const HamburgerMenu = () => {
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);
  const { userState } = useContext(AppContext);
  const [user] = userState;
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
          {(() => {
            if (user && user.driver === true) {
              return null;
            } else if (user && user.admin === true) {
              return null;
            } else if (user) {
              return <Cart />;
            } else {
              return null;
            }
          })()}
        </div>

        <UserInfoCard />
        <Profile />

        {(() => {
          if (user && user.driver === true) {
            return <CurrentOrderHm />;
          } else if (user && user.admin === true) {
            return null;
          } else if (user) {
            return null;
          } else {
            return null;
          }
        })()}

        {/* {(() => {
          if (user && user.driver === true) {
            return <OrderHistoryHm />;
          } else if (user && user.admin === true) {
            return <OrderHistoryHm />;
          } else if (user) {
            return null;
          } else {
            return null;
          }
        })()} */}

        {(() => {
          if (user && user.driver === true) {
            return null;
          } else if (user && user.admin === true) {
            return <DriverDetails />;
          } else if (user) {
            return null;
          } else {
            return null;
          }
        })()}

        {(() => {
          if (user && user.driver === true) {
            return null;
          } else if (user && user.admin === true) {
            return <CustomerDetails />;
          } else if (user) {
            return null;
          } else {
            return null;
          }
        })()}
        <Link to="/orderhistory"  onClick={() => setDisplayHamburgerMenu(!displayHamburgerMenu)}>
          <OrderHistoryHm 
          />
        </Link>
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
