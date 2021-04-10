import React, { useState } from 'react';
import menu from '../assets/menu.svg';

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
      <div
        className={`HamburgerMenu${displayHamburgerMenu ? 'Show' : ''}`}
      ></div>
    </>
  );
};

export default HamburgerMenu;
