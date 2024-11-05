import React from 'react';

// Composants
import Header from './Header';

// Styles
import '../assets/styles/components/_home.scss';
import '../assets/styles/components/_blurBackground.scss';

const Home = () => {
  return (
      <div className='home'>
        <Header />
        <div className='home_container'>
          <div className='home_top'>
            <h1>Développeur Web Junior</h1>
            <h2>Passionné par le développement et la création d’expériences utilisateur intuitives</h2>
          </div>
          <div className='home_bottom'>
            <p>Bienvenue sur mon portfolio ! Découvrez mes compétences en développement web, du front-end au back-end, avec une forte attention aux détails et aux bonnes pratiques.</p>
            <button className='home_cta'><a href="#projects">Explorez mes projets</a></button>
          </div>
        </div>
        <div className='gradient_home-1'></div>
        <div className='gradient_home-2'></div>
      </div>
  );
};


export default Home;