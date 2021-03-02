import './styles/Navbar.css'
import { Link } from 'react-router-dom'
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
            <div className="navLogo">
                <h1>Logo</h1>
            </div>
            <div className="navOptions">
              
               
                {props.userLoggedIn &&  <Link to ="/dashboard" className="navItem">Dashboard</Link>}
                <Link to ="/store" className="navItem">Store</Link>
                {props.userLoggedIn ? 
                    <Link to="/signin" className="navItem" onClick={() => logoutUser()}>Logout</Link>
                :   <Link to ="/signin" className="navItem">Login</Link>
                }
                {!props.userLoggedIn &&  <Link to ="/signUp" className="navItem">Sign Up</Link>}
               
            </div>
        </div>
    )
}

export default Navbar