import React from 'react';
import './Homepage.css';
function Homepage() {
  return (
    <div className='homepage'>
      <h5 className='l-heading'>
        Boost your career prospects with the only resume builder you need.
      </h5>
      <p className='m-heading'>
        A delightful new way to make logos for your internet startup is coming
        soon. Now you can list a product once, sell it everywhere and grow your
        sales faster.
      </p>
      <div>
        <input type='text' placeholder='Enter your Email' className='input' />
        <button className='button'>join the waitlist</button>
      </div>
    </div>
  );
}

export default Homepage;
