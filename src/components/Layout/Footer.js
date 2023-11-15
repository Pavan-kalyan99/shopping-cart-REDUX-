import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>

      <ul className="footer-items">
       
        <li className="footer-item">
          <Link className="footer-link" to='/contact'>Contact Us</Link>
        </li>
        <li className="footer-item">
          <Link className="footer-link" to='/blog'>Blog</Link>
        </li>
        <li className="footer-item">
          <Link className="footer-link" to='/privacy'>Privacy Policy</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
