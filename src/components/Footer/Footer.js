import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';

function Footer() {
  return (
    <div className='grid-container'>
      <div className='item1'>
        <span className='bold'>
          <img src={logo} alt='logo' />
        </span>
        <p>Flat 16, Corn House, 10 Marshgate Lane, London E15 2EU</p>
      </div>
      <div className='item2'>
        <div className='link'>
          <ul>
            <li>
              <a href='/' className='bold'>
                Helpful Links
              </a>
            </li>
            <li>
              <a href='/'>Solutions</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Resources</a>
            </li>
          </ul>
        </div>
        <div className='about'>
          <ul>
            <li>
              <a href='/' className='bold'>
                About
              </a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Partners</a>
            </li>
          </ul>
        </div>
        <div className='social'>
          <ul>
            <li>
              <a href='/' className='bold'>
                Social
              </a>
            </li>
            <li>
              <a href='/'>LinkedIn</a>
            </li>
            <li>
              <a href='/'>Twitter</a>
            </li>
            <li>
              <a href='/'>Instagram</a>
            </li>
            <li>
              <a href='/'>Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='item3'>
        @ 2021 Rezzie. All rights reserved. Privacy Policy | Terms of Use
      </div>
    </div>
  );
}

export default Footer;
