import { use } from 'passport';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom"

const CreateAccountForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [billingLine2, setBillingLine2] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingZipCode, setBillingZipCode] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [displayModal, setDisplayModal] = useState(false);
  const [displayPersonalInfo, setDisplayPersonalInfo] = useState(false);
  const [displayPaymentInfo, setDisplayPaymentInfo] = useState(false);
  const [displayAddressInfo, setDisplayAdressInfo] = useState(false);
  const [cardnumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryLine2, setDeliveryLine2] = useState('');
  const [deliveryState, setDeliveryState] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryZipCode, setDeliveryZipCode] = useState('');
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
          billing_address: billingAddress,
          billing_line_2: billingLine2,
          billing_city: billingCity,
          billing_state: billingState,
          billing_zip_code: billingZipCode,
          card_number: cardnumber,
          card_exp: expiration,
          cvv: cvv,
          delivery_address: deliveryAddress,
          delivery_line_2: deliveryLine2,
          delivery_city: deliveryCity,
          delivery_state: deliveryState,
          delivery_zip_code: deliveryZipCode,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          history.push('/')
          console.log(res);
          console.log(res.json());
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('passwords do not match');
    }
  };

  const history = useHistory();
  return (
    <>
      <div className='ac-profile-card'>
        <div className='ac-profile-image'>
          <img
            src={require(`../assets/profilepic.svg`).default}
            className='profile-pic-cart'
            alt='pizza-img'
          />
        </div>
        <h3
          className='ac-profile-title'
          onClick={() => setDisplayModal(!displayModal)}
        >
          Profile
        </h3>
        <p
          className='already-have-an-account'
          onClick={() => props.setIsSignIn(true)}
        >
          Already Have an Account?
        </p>
      </div>
      <div
        className={`ac-profiledropdown-content ${displayModal ? 'show' : ''}`}
      >
        <ul className='creation-form-list'>
          <li
            className='profile-creation-personal-i'
            onClick={() => setDisplayPersonalInfo(!displayPersonalInfo)}
          >
            personal Info
          </li>
          <div
            className={`ac-profile-personal-info ${
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
                <Form.Label className='formBasicPassword-confirm'>
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
{/* //
              <li
                onClick={() => setDisplayPaymentInfo(!displayPaymentInfo)}
                className='profile-creation-payment-i'
              >
                Payment Info
              </li>
              <div
                className={`ac-profile-payment-info ${
                  displayPaymentInfo ? 'show' : ''
                }`}
              >
                <div className='ac-card-container'>
                  <Form.Group controlId='forPaymentInfo'>
                    <Form.Label className='forPaymentInfo'>
                      Card Number
                    </Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='4242 42424 42424 4424242'
                      value={cardnumber}
                      onChange={e => setCardNumber(e.target.value)}
                    />
                  </Form.Group>
                  <div className='ac-card-info-bottom'>
                    <Form.Group controlId='forExpirationInfo'>
                      <Form.Label className='forExpirationInfo'>
                        Expiration
                      </Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='03/2025'
                        value={expiration}
                        onChange={e => setExpiration(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId='forcvvInfo'>
                      <Form.Label className='forcvvInfo'>CVV</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='424'
                        value={cvv}
                        onChange={e => setCvv(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className='line'></div>
                <h3 className='billing-address'>Billing Address</h3>

                <Form.Group controlId='formBasicAddress'>
                  <Form.Label className='formBasicAddress'>Address</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='123 Main Street, New York, NY 10030'
                    value={billingAddress}
                    onChange={e => setBillingAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicAddress-line2'>
                  <Form.Label className='formBasicAddress-line2'>
                    Line 2
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Apt #101'
                    value={billingLine2}
                    onChange={e => setBillingLine2(e.target.value)}
                  />
                </Form.Group>
                <div className='ac-address-container'>
                  <Form.Group controlId='formBasicAddress-city'>
                    <Form.Label className='formBasicAddress-city'>
                      City
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder=' New York'
                      value={billingCity}
                      onChange={e => setBillingCity(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicAddress-state'>
                    <Form.Label className='formBasicAddress-state'>
                      State
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='NY'
                      value={billingState}
                      onChange={e => setBillingState(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicAddress-zip'>
                    <Form.Label className='formBasicAddress-zip'>
                      ZipCode
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='10030'
                      value={billingZipCode}
                      onChange={e => setBillingZipCode(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className='line'></div>
//              </div> */}
              <li
                onClick={() => setDisplayAdressInfo(!displayAddressInfo)}
                className='profile-creation-address-i'
              >
                Delivery Address
              </li>
              <div
                className={`ac-profile-address-info${
                  displayAddressInfo ? 'show' : ''
                }`}
              >
                <Form.Group controlId='formBasicAddress-delivery'>
                  <Form.Label className='formBasicAddress'>Address</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='123 Main Street, New York, NY 10030'
                    value={deliveryAddress}
                    onChange={e => setDeliveryAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicAddress-line2'>
                  <Form.Label className='formBasicAddress-line2'>
                    Line 2
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Apt #101'
                    value={deliveryLine2}
                    onChange={e => setDeliveryLine2(e.target.value)}
                  />
                </Form.Group>
                <div className='ac-address-container'>
                  <Form.Group controlId='formBasicAddress-city'>
                    <Form.Label className='formBasicAddress-city'>
                      City
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder=' New York'
                      value={deliveryCity}
                      onChange={e => setDeliveryCity(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicAddress-state'>
                    <Form.Label className='formBasicAddress-state'>
                      State
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='NY'
                      value={deliveryState}
                      onChange={e => setDeliveryState(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicAddress-zip'>
                    <Form.Label className='formBasicAddress-zip'>
                      ZipCode
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='10030'
                      value={deliveryZipCode}
                      onChange={e => setDeliveryZipCode(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </div>
              
                <Button
                  variant='primary'
                  type='submit'
                  className='profile-creation-submit-btn'
                  // onClick={history.push('/')}
                >
                  Submit
                </Button>
          
            </Form>
          </div>
        </ul>
      </div>
    </>
  );
};

export default CreateAccountForm;
