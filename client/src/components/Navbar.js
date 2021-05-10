import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import HamburgerMenu from './HamburgerMenu';
import logo from '../assets/logo.svg';

const Navbar = props => {
  const { userState } = useContext(AppContext);
  const [user] = userState;

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

          {user ? (
            ''
          ) : (
            <Link to='/signin' className='navItem-sigin'>
              Sign In
            </Link>
          )}
          {props.cartLength}
        </div>

        {(() => {
          if (user && user.driver === true) {
            return null;
          } else if (user && user.admin === true) {
            return null;
          } else if (user) {
            return (
              <Cart
                displayModal={props.displayModal}
                setDisplayModal={props.setDisplayModal}
              />
            );
          } else {
            return null;
          }
        })()}
      </div>
    </>
  );
};

export default Navbar;
