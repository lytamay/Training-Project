import React from 'react';
import '../css/Navbar.css'

function Navbar(props) {
    return (
        <div className = 'container-fluid box'>
            <div className='row'>
                <a href="#">home</a>
                <a href="#">playlist</a>
                <a href="#">bang xep hang</a>
                <a href="#">Video</a>
                <input type="text" value='' placeholder='timkiemnhacyeuthich'/>
            </div>
        </div>
    );
}

export default Navbar;