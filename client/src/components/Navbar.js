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
              <Link to = "/">
                <button type = "button">Logo</button>
                </Link>
            </div>
            <div className="navOptions">
              
               
                {props.userLoggedIn &&  <Link to ="/dashboard" className="navItem">Dashboard</Link>}
                {props.userLoggedIn ? 
                    <Link to="/signin" className="navItem" onClick={() => logoutUser()}>Logout</Link>
                :   <Link to ="/signin" className="navItem">Sign In</Link>
                }
            </div>
        </div>
    )
}

export default Navbar