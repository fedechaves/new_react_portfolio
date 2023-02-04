import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fedecha</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>
        </ul>

        <div className="footer__social">
          <a  href="https://twitter.com/fedecha_ves" 
              className="footer__social-link" 
              target="_blank">
              <i className="bx bxl-twitter"></i>
          </a>

          <a  href="https://www.linkedin.com/in/fedechavesflecha/" 
              className="footer__social-link" 
              target="_blank">
              <i className="bx bxl-linkedin"></i>
          </a>

          <a  href="https://github.com/fedechaves" 
              className="footer__social-link" 
              target="_blank">
              <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className='footer__copy'>
          &#169; Fedecha. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
