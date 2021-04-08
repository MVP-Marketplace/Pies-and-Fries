import SignInForm from './SignInForm';
import CreateAccountForm from './CreateAccountForm';

const SignIn = props => {
  return (
    // comments to test the forms till we can trigger the check.

    <div>
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
      {props.signIn && (
        <div>
          <h1>This is sign In</h1>

          <SignInForm />
        </div>
      )}
      {!props.signIn && (
        <div>
          <h1>this is sign up</h1>
          <CreateAccountForm />
        </div>
      )}
    </div>
  );
};

export default SignIn;
