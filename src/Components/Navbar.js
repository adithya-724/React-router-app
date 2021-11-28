import React from 'react'
import '../App.css';
import {Link,NavLink} from 'react-router-dom';

function Navbar() {
    const navStyle ={
        color: '#fff',
        textDecoration : 'none'
    };
  return (
    <nav>   
        <h1>Doggoys</h1>
        <ul>
            <li><Link to = "/about" style={navStyle} >About</Link></li>
            <li><Link to = "/contact" style={navStyle} >Contact</Link></li>
            <li><Link to = "/more" style={navStyle} >Fetch API</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;
