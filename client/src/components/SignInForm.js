import {useState} from 'react'
import {Link} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';

const SignInForm = (props) => {

const [email, setEmail] = useState('')
const[password,setPassword] = useState('')

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
      res.json()
      if(res.status === 200) {
        window.location.href="/dashboard"
      } 
    }
      )
    .catch((err) => {
      console.log(err)
    })
  } 

  const logoutUser = () => {
    fetch('/api/users/logout', {
      method: "POST"
    })
    .then((res) => {
      console.log(res)
      res.json()
    }
      )
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
                      <div className="submitButtonContainer">
                      <Button className="submitButton" variant="primary" type="submit">
                        Start!
                      </Button>
                      </div>
              </Form>
              <div className="remember-me-checkbox">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault"> Remember Me</label>
              </div>
              
              <p className="switch-login-signup"onClick={() => props.setIsSignIn(false)}>Create new account?</p>
              <div className="socials-login">
                <div className="socials-button-container">
                <img src={require('../assets/google-icon.svg').default}/>                
                </div>
                <div className="socials-button-container">
                  <img src={require('../assets/facebook-icon.svg').default}/>
                </div>
              </div>
       </div> 
    )
}
export default SignInForm