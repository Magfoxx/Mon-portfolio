import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../assets/styles/components/_navbar.scss';

const Navbar = () => {
  // États pour gérer la position sticky de la navbar, la section active et l'état du menu mobile
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Références pour la position initiale de la navbar et la référence DOM de la navbar elle-même
  const navbarRef = useRef(null);
  const initialPosition = useRef(0);

  // Obtient l'URL actuelle pour déterminer si l'utilisateur est sur une page de détails de projet
  const location = useLocation();
  const isProjectDetailPage = location.pathname.startsWith('/projects/');

  // Utilise useEffect pour définir la position initiale de la navbar et gérer le comportement de défilement
  useEffect(() => {
    if (navbarRef.current) {
      // Définit la position initiale de la navbar
      initialPosition.current = navbarRef.current.getBoundingClientRect().top + window.scrollY;
    }

    // Fonction pour gérer le défilement
    const handleScroll = () => {
      if (navbarRef.current) {
        // Met à jour l'état sticky si la position de défilement est au-delà de la position initiale de la navbar
        setIsSticky(window.scrollY >= initialPosition.current);

        // Détection de la section active basée sur la position de la section dans la fenêtre
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

    // Ajoute l'événement de défilement et le nettoie à la fin
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour faire défiler vers une section spécifique
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Défile en douceur jusqu'à la section et ferme le menu mobile après la navigation
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);

      // Met à jour l'URL pour refléter la section actuelle sans ajouter plusieurs #/
      if (window.location.hash !== `#${sectionId}`) {
        window.history.replaceState(null, '', `#${sectionId}`);
      }
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${isSticky && !isProjectDetailPage ? 'sticky' : ''} ${isProjectDetailPage ? 'navbar_projectDetail' : ''}`}
    >
      {/* Icône de menu mobile, affichée uniquement en mode mobile */}
      <div className="navbar_burger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars />
      </div>

      {/* Menu de navigation, affiché horizontalement sur les écrans plus grands et verticalement en mode mobile */}
      <ul className={`navbar_menu ${isMobileMenuOpen ? 'navbar_menu--mobile' : ''}`}>
        <li className="navbar_item">
          <Link
            to="/#home"
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? 'active-link' : ''}
          >
            Accueil
          </Link>
        </li>
        <div className="separator"></div>
        <li className="navbar_item">
          <Link
            to="/#about"
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active-link' : ''}
          >
            À propos
          </Link>
        </li>
        <div className="separator"></div>
        <li className="navbar_item">
          <Link
            to="/#projects"
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'active-link' : ''}
          >
            Projets
          </Link>
        </li>
        <div className="separator"></div>
        <li className="navbar_item">
          <Link
            to="/#contact"
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active-link' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Élément de droite dans la navbar, indiquant la disponibilité */}
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