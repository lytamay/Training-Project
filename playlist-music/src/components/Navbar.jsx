import React from 'react';
import '../css/Navbar.css'

function Navbar(props) {
    return (
      <div className = 'navbar'>
        <a href="#">Home</a>
        <a href="#">Detail</a>
        <input type="text" placeholder="search"/>
      </div>
  );
}

export default Navbar;