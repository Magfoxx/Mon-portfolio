import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../assets/styles/components/_navbarDetail.scss';

const NavbarDetail = () => {
  // États pour gérer l'ouverture du menu mobile et la détection de la taille de l'écran (desktop ou mobile)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const navigate = useNavigate();
  const location = useLocation();

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMobileMenu = () => {
    if (!isDesktop) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  // Fonction pour naviguer vers une section spécifique sur la page d'accueil
  const handleNavigation = (sectionId) => {
    // Si l'utilisateur n'est pas sur la page d'accueil, redirige vers la page d'accueil
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }

    // Après redirection, fait défiler en douceur jusqu'à la section ciblée
    setTimeout(() => {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);

    // Ferme le menu mobile si l'écran n'est pas en mode desktop
    if (!isDesktop) {
      setIsMobileMenuOpen(false);
    }
  };

  // Utilise useEffect pour détecter la redimensionnement de la fenêtre et adapter l'affichage
  useEffect(() => {
    const handleResize = () => {
      // Met à jour l'état de l'affichage desktop/mobile
      setIsDesktop(window.innerWidth > 768);
      // Ferme le menu mobile si l'écran repasse en mode desktop
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Ajoute un écouteur d'événements pour la redimensionnement de la fenêtre
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar-detail">
      {/* Icône du menu mobile (visible uniquement en mode mobile) */}
      <div className="navbar-detail_burger" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      {/* Menu de navigation, affiché horizontalement en desktop et verticalement en mode mobile */}
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