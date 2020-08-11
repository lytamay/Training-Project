import React from 'react';
import loginRegisterPage from '../css/loginRegisterPage.css'
import FormLogin from '../components/FormLogin';
import FormSignup from '../components/FormSignup';

function Login(props) {
    return (
        <div className = "container loginRegisterPage">
            <div className = 'row'>
                {/* <button className = 'registerButton'> Dang Ky </button>
                <button className = 'loginButton'> Dang Nhap </button> */}
                {/* <FormLogin/> */}
                <FormSignup/>
            </div>
        </div>
    );
}

export default Login;