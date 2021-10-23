import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';

function Navbar() {
  return (
    <div className='navBar'>
      <div className='logo'>
        <span>
          <img src={logo} alt='logo' />
        </span>
      </div>
      <div className='links'>
        <a href='/'>contact us</a>
        <button className='button'>join the waitlist</button>
      </div>
    </div>
  );
}

export default Navbar;
