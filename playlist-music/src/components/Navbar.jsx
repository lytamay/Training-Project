import React from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { LikeFilled } from '@ant-design/icons';

function Navbar(props) {
    return (
      <div className = 'navbar'>
        <Link to="/">Home</Link>
        <Link to="/baihat">Bai hat</Link>
        <Link to="/playlist">Playlist</Link>
        <input type="text" placeholder="search"/>
      </div>
  );
}

export default Navbar;