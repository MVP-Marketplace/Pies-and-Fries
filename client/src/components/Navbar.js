import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import { Cart } from 'react-bootstrap-icons';

const Navbar = (props) => {
    const logoutUser = () => {
        fetch('/api/users/logout', {
          method: "POST"
        })
        .then((res) => {
          console.log(res)
          props.setUserLogginIn(false)
          res.json()
        })
        .catch((err) => {
          console.log(err)
        })
      }
      
    return(
        <div className="container">
          <Cart/>
            <div className="navLogo">
              <Link to = "/">
                <button type = "button">Logo</button>
                </Link>
            </div>
            <div className="navOptions">
              

                {props.userLoggedIn &&  <Link to ="/dashboard" className="navItem">Dashboard</Link>}
             
                <Link to ="/store" className="navItem">Store</Link>
               <Link to ="/checkout" className="navItem">Cart {props.cartLength}</Link>
                {props.userLoggedIn ? 
                    <Link to="/signin" className="navItem" onClick={() => logoutUser()}>Logout</Link>
                :   <Link to ="/signin" className="navItem">Sign In</Link>
                }
            </div>
        </div>
    )
}

export default Navbar;