import React from 'react';
import '../css/NavbarLogin.css'

function NavbarLogin(props) {
    return (
        <div className = 'container-fluid navbarLogin '>
            <div className='row'>
                <div>
                    <h4 className='nhachay'>Nhachay</h4>
                </div>
                <div className='Login'>
                    <p> login</p>    
                </div>
            </div>
        </div>
    );
}

export default NavbarLogin;