import { Link } from 'react-router-dom';
import Cart from '../assets/Cart.svg';

const Navbar = props => {
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
    <div className='Navbar'>
      <div className='navLogo'>
        <Link to='/'>
          <button type='button' className='logo'>
            Logo
          </button>
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
        <Link to='/checkout' className='navItem-cart'>
          <img src={Cart} alt='cart' /> {props.cartLength}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
