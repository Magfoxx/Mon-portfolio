import React from 'react';
import Navbar from '../components/NavbarDetail';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../assets/styles/components/_error404.scss';

const NoPage = () => {
  return (
    <div className="error-page">
      <Navbar />
      <div className="error-page_content">
        <h1>Error 404</h1>
        <p>La page que vous demandez n'existe pas.</p>
        <p className='lien'>
          <Link to="/" className="error-page_link">
            Retourner à la page d'accueil
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NoPage;