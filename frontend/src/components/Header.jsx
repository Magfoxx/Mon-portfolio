// Header.jsx
import React from 'react';
import Logo from '../assets/images/logo.png';
import '../assets/styles/layout/_header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header_left'>
        <img className='header_left_logo' src={Logo} alt="logo" />
        <p className='header_left_name'>MagnusFoxx</p>
      </div>

      <div className='header_right'>
        <p>Developpeur web</p>
        <div className='header_right_container'>
          <div className='header_right_circle'></div>
          <div className='header_right_marquee'>
            <span className='header_right_text'>Disponible</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;