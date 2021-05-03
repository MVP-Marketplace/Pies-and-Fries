import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import HamburgerMenu from './HamburgerMenu';
import logo from '../assets/logo.svg';

const Navbar = props => {
  const { userState } = useContext(AppContext);
  const [user, setUser] = userState;
  const logoutUser = () => {
    fetch('/api/users/logout', {
      method: 'POST',
    })
      .then(res => {
        console.log(res);
        props.setUserLogginIn(false);
        res.json();
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      {user ? <HamburgerMenu /> : ''}
      <div className='Navbar'>
        <div className='navLogo'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </div>
        <div className='navOptions'>
          {props.userLoggedIn && (
            <Link to='/dashboard' className='navItem'>
              Dashboard
            </Link>
          )}

          {/* <Link to ="/store" className="navItem">Store</Link> */}

          {props.userLoggedIn ? (
            <Link
              to='/signin'
              className='navItem-signin'
              onClick={() => logoutUser()}
            >
              Logout
            </Link>
          ) : (
            <Link to='/signin' className='navItem-sigin'>
              Sign In
            </Link>
          )}
          {props.cartLength}
        </div>
        {user ? <Cart /> : ''}
      </div>
    </>
  );
};

export default Navbar;
