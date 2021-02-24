import SignInForm from './SignInForm'
import CreateAccountForm from './CreateAccountForm';



const SignIn = (props) => {
 
    return(
        
       // comments to test the forms till we can trigger the check. 
        <div>
            <signInForm />
            {/* {props.signIn && (
            <div>
                <h1>this is sign in</h1>
                <SignInForm />
            </div>
            )} */}
            {/* {props.signIn === false && (<> */}
                <h1>this is sign up</h1>
                <CreateAccountForm />
                {/* </> */}
            {/* // )} */}

        </div>
       
    )
}

export default SignIn