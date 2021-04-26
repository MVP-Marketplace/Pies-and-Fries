import { useState } from 'react';
import SignInForm from './SignInForm';
import CreateAccountForm from './CreateAccountForm';
import UserInfoCard from './UserInfoCard';

const SignIn = props => {
  const [isSignIn, setIsSignIn] = useState(props.signIn);
  return (
    // comments to test the forms till we can trigger the check.

    <div>
      {isSignIn && (
        <>
          <div className='toggle-container'>
            <div className='toggle-container-left'>
              <button className='toggle-driver' />
              <p className='toggle-name'>Drivers</p>
            </div>
            <div className='toggle-container-right'>
              <button className='toggle-customer' />
              <p className='toggle-name'>Customers</p>
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
