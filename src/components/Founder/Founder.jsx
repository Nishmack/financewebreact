import React from 'react';
import './Founder.css';

function Founder({ name, title }) {
  return (
    <div className="person-container">
        <h2>Meet Our Founder</h2>
      <img src="https://i.ibb.co/9gBQtpT/Pawan-panjabi.jpg" alt="Person's image" />
    
    
      <div className='divsec'>
      <span>Mr. Pawan Punjabi</span>
      
      <p>Founder</p>

      </div>
    </div>
  );
}

export default Founder;