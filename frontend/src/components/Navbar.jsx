import React, { useEffect, useState, useRef } from 'react';
import '../assets/styles/components/_navbar.scss';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);
  const initialPosition = useRef(0);

  useEffect(() => {
    if (navbarRef.current) {
      initialPosition.current = navbarRef.current.getBoundingClientRect().top + window.scrollY;
    }

    const handleScroll = () => {
      if (navbarRef.current) {
        // Activer sticky lorsque le défilement atteint la position d'origine de la navbar
        setIsSticky(window.scrollY >= initialPosition.current);

        // Détection de la section visible et mise à jour de l'état activeSection
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
    }
  };

  return (
    <nav ref={navbarRef} className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <ul className="navbar_menu">
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
    </nav>
  );
};

export default Navbar;