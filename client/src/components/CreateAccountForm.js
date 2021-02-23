import { Form, Button } from 'react-bootstrap';

 const CreateAccountForm = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Text" placeholder="EnterName" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicAdminCheck">
          <Form.Check type="checkbox" label="Are you a franchise " />
        </Form.Group>

        <Form.Group controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="password" placeholder="305-273-1232" />
        </Form.Group>
        <Form.Group controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="123 Main Street, New York, NY 10030" />
        </Form.Group>




        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}


export default CreateAccountForm