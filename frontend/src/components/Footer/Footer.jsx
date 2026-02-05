import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="Canteen Connect Logo" className="footer-logo" />
            <p>Canteen Connect lets students pre-order meals and pick up at the counter. No more long queues—order ahead and collect when ready.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>LINKS</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Pickup from counter</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@canteenconnect.edu</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Canteen Connect — All rights reserved.</p>
    </div>
  )
}

export default Footer
