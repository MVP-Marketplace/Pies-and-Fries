import { useState } from 'react';
import SignInForm from './SignInForm';
import CreateAccountForm from './CreateAccountForm';
import UserInfoCard from './UserInfoCard';
import pizzaMonster from '../assets/pizzamonster.svg';
import motorcycle from '../assets/drivers.svg'

const SignIn = props => {
  const [isSignIn, setIsSignIn] = useState(props.signIn);
  return (
    // comments to test the forms till we can trigger the check.

    <div>
      {isSignIn && (
        <>
          <div className='toggle-container'>
            <div className='toggle-container-left'>
              <button className='toggle-driver'>
                <img src={motorcycle} alt="pink motorcycle"/>
                <p className='toggle-name'>Drivers</p>
              </button>
              
            </div>
            <div className='toggle-container-right'>
              <button className='toggle-customer'>
              <img src={pizzaMonster} alt="pizza monster"/>
              <p className='toggle-name'>Customers</p>
              </button>
              
            </div>
          </div>
          <div class='sign-in-form'>
            <SignInForm setIsSignIn={setIsSignIn} />
          </div>
        </>
      )}
      {!isSignIn && (
        <div>
          <CreateAccountForm setIsSignIn={setIsSignIn} />
        </div>
      )}
    </div>
  );
};

export default SignIn;
