import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../assets/styles/components/_navbarDetail.scss';

const NavbarDetail = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    if (!isDesktop) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
    setTimeout(() => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);

    if (!isDesktop) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar-detail">
      <div className="navbar-detail_burger" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      <ul className={`navbar-detail_menu ${isMobileMenuOpen ? 'navbar-detail_menu--mobile active' : ''}`}>
        <li className="navbar-detail_item">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('#home'); }}>
            Accueil
          </a>
        </li>
        <li className="navbar-detail_item">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('#about'); }}>
            À propos
          </a>
        </li>
        <li className="navbar-detail_item">
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavigation('#projects'); }}>
            Projets
          </a>
        </li>
        <li className="navbar-detail_item">
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('#contact'); }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDetail;