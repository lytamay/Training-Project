import React from 'react';
import '../css/FormRegister.css'
import LoginWithGoogle from '../components/LoginWithGoogle'

function FormSignup(props) {
    return (
        <div className = 'container '>
            <div className ='row'>
                <div className = 'col-md-12 col-lg-6 col-xl-6 FormSignUp'>
                    <h1>Sign up</h1>
                    <LoginWithGoogle/>
                    <hr/>
                    <form action="">
                        <input className='nameSignUp' type="text" placeholder='name'/>
                        <input className='emailSignUp' type="email" placeholder='email'/>
                        <input className='passWord' type="password" placeholder='password'/>
                        <input className='confirmPassword' type="password" placeholder='confirm password'/>
                        <button className='submitButton' type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormSignup;