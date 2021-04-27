import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateAccountForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPersonalInfo, setDisplayPersonalInfo] = useState(false);

  const handleSubmit = e => {
    if (passwordMatch === password) {
      e.preventDefault();
      fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          number: number,
          address: address,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          console.log(res)
          console.log(res.json())})
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('passwords do not match');
    }
  };
  return (
    <>
      <div className='hm-user-info-card'>
        <div className='hm-user-image'></div>
        <div className='hm-user-info'>
          <p className='hm-user-name'>Shalom Guest!</p>
        </div>
      </div>
      <div className='hm-profile-card'>
        <div className='hm-profile-image'></div>
        <h3
          className='hm-profile-title'
          onClick={() => setDisplayModal(!displayModal)}
        >
          Profile
        </h3>
      </div>
      <div className={`profiledropdown-content ${displayModal ? 'show' : ''}`}>
        <ul>
          <li
            className='profile-creation-personal-i'
            onClick={() => setDisplayPersonalInfo(!displayPersonalInfo)}
          >
            personal Info
          </li>
          <div
            className={`profile-personal-info ${
              displayPersonalInfo ? 'show' : ''
            }`}
          >
            <Form onSubmit={handleSubmit} className='profile-creation-form'>
              <Form.Group controlId='formBasicUserName'>
                <Form.Label className='formBasicUserName'>Name</Form.Label>
                <Form.Control
                  type='Text'
                  placeholder='EnterName'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicEmail-creation'>
                <Form.Label className='formBasicEmail-creation'>
                  Email address
                </Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword-creation'>
                <Form.Label className='formBasicPassword-creation'>
                  Password
                </Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Form.Label className='formBasicPassword-creation'>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={passwordMatch}
                  onChange={e => setPasswordMatch(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPhoneNumber'>
                <Form.Label className='formBasicPhoneNumber'>
                  Phone Number
                </Form.Label>
                <Form.Control
                  type='number'
                  placeholder='305-273-1232'
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='formBasicAddress'>
                <Form.Label className='formBasicAddress'>Address</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='123 Main Street, New York, NY 10030'
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </Form.Group>

              <Button
                variant='primary'
                type='submit'
                className='profile-creation-submit-btn'
              >
                Submit
              </Button>
            </Form>
            <p
              className='already-have-an-account'
              onClick={() => props.setIsSignIn(true)}
            >
              Already Have an Account?
            </p>
          </div>

          <li className='profile-creation-payment-i'>Payment Info</li>
          <li className='profile-creation-password-i'>Password</li>
        </ul>
      </div>
    </>
  );
};

export default CreateAccountForm;
