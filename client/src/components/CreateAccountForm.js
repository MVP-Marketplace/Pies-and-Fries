
import {useState} from 'react'
import { Form, Button } from 'react-bootstrap';

 const CreateAccountForm = () => {

  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [number,setNumber] = useState('')
  const [address,setAddress] = useState('')
  const [passwordMatch, setPasswordMatch] = useState('')

  const handleSubmit = (e) => {
    if(passwordMatch === password ) {
      e.preventDefault()
      fetch('/api/users', {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          number: number,
          address: address,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err)
      })
    } else {
      alert('passwords do not match')
    }
   
  }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Text" placeholder="EnterName" value = {name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value = {email}  onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value = {passwordMatch} onChange={(e) => setPasswordMatch(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="305-273-1232" value = {number} onChange={(e) => setNumber(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="123 Main Street, New York, NY 10030" value = {address} onChange={(e) => setAddress(e.target.value)}/>
        </Form.Group>




        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}


export default CreateAccountForm