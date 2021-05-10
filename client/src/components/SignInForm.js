import {useState, useContext} from 'react'
import { useHistory} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import {AppContext} from '../context/AppContext'
const SignInForm = (props) => {
const { userCheck} = useContext(AppContext)

const [email, setEmail] = useState('')
const[password,setPassword] = useState('')
const history = useHistory();


const handleFormSubmit = (e) => {
    e.preventDefault()
    fetch('/api/users/login', {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((res) => {
      console.log(res)
      if(res.status === 200) {
        history.push("/")
      }
      userCheck()
    })
    .catch((err) => {
      console.log(err)
    })
  } 
  
    return (
        <div>
            <Form className="signInFormContainer"onSubmit={handleFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                     <Form.Control className="email-input"type="email" placeholder="Enter email"  value = {email}  onChange={(e) => setEmail(e.target.value)}/>
                         </Form.Group>
                    <Form.Group controlId="formBasicPassword">

                        <Form.Control className="password-input" type="password" placeholder="Password"  value = {password} onChange={(e) => setPassword(e.target.value)}/>
                      </Form.Group>
                      
              </Form>
              <div className="remember-me-checkbox">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault"> Remember Me</label>
              </div>
              
              <p className="switch-login-signup"onClick={() => props.setIsSignIn(false)}>Create new account?</p>
              <div className="submitButtonContainer">
                      <Button className="submitButton" variant="primary" type="submit">
                        Start!
                      </Button>
              </div>
              <div className="socials-login">
                
                <div className="socials-button-container">
                <img alt="google icon" src={require('../assets/google-icon.svg').default}/>                
                </div>
                <div className="socials-button-container">
                  <img alt="facebook icon" src={require('../assets/facebook-icon.svg').default}/>
                </div>
              </div>
       </div> 
    )
}
export default SignInForm