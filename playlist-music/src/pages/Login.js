import React from 'react';
import FormLogin from '../components/FormLogin';
import '../css/Login.css'
import NavbarLogin from '../components/NavbarLogin';
function Login(props) {
    return (
        <div className = 'login'>
            <NavbarLogin/>
            <FormLogin/>
        </div>
    );
}

export default Login;