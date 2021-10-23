import React from 'react';
import svg from '../../../images/rezzie 2.png';
import './Aboutpage.css';

function Aboutpage() {
  return (
    <div>
      <div className='wrapper'>
        <div className='grid-cols'>
          <div className='grid-item-1'>
            <h6 className='about-heading'>
              With templates for every profession, Rezzie is built for everyone.
            </h6>
            <p className='about-text'>
              A delightful new way to make logos for your internet startup is
              coming soon. Now you can list a product once, sell it everywhere
              and grow your sales faster.
            </p>
          </div>
          <div className='grid-item-2'>
            <div className='svg_wrapper'>
              <img src={svg} alt='svg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
