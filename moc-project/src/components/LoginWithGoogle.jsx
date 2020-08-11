import React from 'react';
import GoogleLogin from 'react-google-login'

function LoginWithGoogle(props) {
    const responseGoogle = (response) =>{
        console.log(response)
        console.log(response.profileObj.email)
    }

    return (
        <GoogleLogin className = 'googleLogin'
            clientId = '553440884931-578l4q92h5u3rds8nemkvnend0onh63k.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default LoginWithGoogle;