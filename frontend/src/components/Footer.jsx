import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import des icônes
import Logo from '../assets/images/logo.png';
import '../assets/styles/layout/_footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_left'>
        <img className='footer_left_logo' src={Logo} alt="logo" />
        <p className='footer_left_name'>MagnusFoxx</p>
      </div>

      <div className='footer_center'>
        <div className='footer_center_contact'>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className='footer_right'>
        <p>© Tout droit réservé</p>
      </div>
    </footer>
  );
};

export default Footer;