import React from 'react';
import './Enrolpage.css';

function Enrolpage() {
  return (
    <div className='enrolpage'>
      <h5>Join the waitlist.</h5>
      <p>Be one of the first people to know when Rezzie launches.</p>
      <div className='countDown'>
        <span className='count'>0</span>
        <span className='count'>0</span>
        <span className='count'>4</span>
        <span className='count'>1</span>
      </div>
      <h6>people waiting!</h6>
      <div className='enrolForm'>
        <input type='text' placeholder='Enter your Email' />
        <button className='button'>join the waitlist</button>
      </div>
    </div>
  );
}

export default Enrolpage;
