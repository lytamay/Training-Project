import React from 'react';
import GoogleLogin from 'react-google-login'
import { useRecoilState } from 'recoil';
import { logInState,inforPersonState } from '../state/State';

function LoginWithGoogle(props) {

    const [LoginState , setLoginState] = useRecoilState(logInState)
    const [infoPersonState, setInforPersonState] = useRecoilState(inforPersonState)

    const responseGoogle = (response) =>{
        const googleResponse = {
            Name : response.profileObj.name,
            Email : response.profileObj.email,
            token : response.googleId,
            image : response.profileObj.imageUrl,
            ProviderId : 'Google'
        }
        const tam = [...LoginState]
        const check = tam.find(user => user.token === googleResponse.token)
        if(!check){
            tam.push(googleResponse)
            setLoginState(tam)
            setInforPersonState(googleResponse.token)
            localStorage.setItem('user', JSON.stringify(tam))
        }
    }
    console.log(logInState);
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
