import React from 'react'
import Zb from '../../assets/images/ziibo.png'
import './Footer.css';

function Footer() {
  return (
      <div className='ziibo-footer-container'>
        <h3>GET CONNECTED</h3>
        <img src= {Zb}alt='ZbLogo' style={{width:"100vw"}}/>
        <div className='ziibo-footer-navigations'>
        <h4>NAVIGATIONS</h4>
        <div className="links">
        <a href='/navigation'>Home</a>
        <a href='/navigation'>About Us</a>
        <a href='/navigation'>Contact Us</a>
        <a href='/navigation'>FAQs</a>
        </div>
        </div>
        <hr></hr>
        
        <div className='ziibo-footer-copyright'>
        @2024 ZIIBO PLC.All Rights Reserved
        </div>
  
        <div className='ziibo-footer-license'>
         <a href='/terms'>Terms& Conditions</a>
         <a href='/privacy'>Privacy</a>
         <a href='/security'>Security</a>
         </div>
      </div>
   );
};

export default Footer;