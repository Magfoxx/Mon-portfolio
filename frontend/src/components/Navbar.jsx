import React, { useEffect, useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import '../assets/styles/components/_navbar.scss';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const initialPosition = useRef(0);

  useEffect(() => {
    if (navbarRef.current) {
      initialPosition.current = navbarRef.current.getBoundingClientRect().top + window.scrollY;
    }

    const handleScroll = () => {
      if (navbarRef.current) {
        setIsSticky(window.scrollY >= initialPosition.current);

        const sections = ['home', 'about', 'projects', 'contact'];
        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
              setActiveSection(sectionId);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Ferme le menu mobile après la navigation
    }
  };

  return (
    <nav ref={navbarRef} className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar_burger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars />
      </div>

      <ul className={`navbar_menu ${isMobileMenuOpen ? 'navbar_menu--mobile' : ''}`}>
        <li className="navbar_item">
          <a
            href="#home"
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? 'active-link' : ''}
          >
            Accueil
          </a>
        </li>
        <div className="separator"></div>
        <li className="navbar_item">
          <a
            href="#about"
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active-link' : ''}
          >
            À propos
          </a>
        </li>
        <div className="separator"></div>
        <li className="navbar_item">
          <a
            href="#projects"
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'active-link' : ''}
          >
            Projets
          </a>
        </li>
        <div className="separator"></div>
        <li className="navbar_item">
          <a
            href="#contact"
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active-link' : ''}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="header_right_container">
        <div className="header_right_circle"></div>
        <div className="header_right_marquee">
          <span className="header_right_text">Disponible</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;