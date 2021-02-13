const SignIn = (props) => {
    return(
        <div>
            {props.signIn && (
            <div>
                <h1>this is sign in</h1>
            </div>
            )}
            {props.signIn === false && (
                <h1>this is sign up</h1>
            )}
        </div>
    )
}

export default SignIn