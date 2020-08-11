import React from 'react';
import  '../css/FormLogin.css'
import LoginWithGoogle from '../components/LoginWithGoogle'

function FormLogin(props) {
    return (
        <div className = 'container'>
            <div className = 'row'>
                <div className ='col-md-12 col-lg-6 col-xl-6 boxFormLogin'>
                    <h1 className = 'login'>Log in</h1>
                    <LoginWithGoogle/>
                    <hr/>
                    <p>dangg nhap mat user name va passworld</p>
                    <form className = 'loginForm'>
                        <input className ='email' type = 'email' placeholder = 'email'></input>
                        <input className = 'password' type = 'password' placeholder = 'password'></input><br/>
                        <button type ='submit' className = 'loginButton'> Log in</button>
                    </form>
                    <div className = 'sign-up'>
                        Don't have account yet? <a href = '#'>sign-up for free.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;