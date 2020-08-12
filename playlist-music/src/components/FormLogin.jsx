import React from 'react';
import  '../css/FormLogin.css'
import LoginWithGoogle from '../components/LoginWithGoogle'

function FormLogin(props) {
    return (
        <div className = 'container-fluid box'>
            <LoginWithGoogle className='loginwithgoogle'/>
        </div>
    );
}

export default FormLogin;
