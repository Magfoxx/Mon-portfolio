import React from 'react';
import { Element } from 'react-scroll';

// Importation des composants
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Accueil from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import '../assets/styles/components/_homeSeparation.scss';

const Home = () => {
  return (
    <div>
      <main>
        {/* Section Home */}
        <Element name="home" className="section home-section" id="home">
          <Header />
          <Navbar />
          <Accueil />
        </Element>

        <div className='home_separation'></div>

        {/* Section About */}
        <Element name="about" className="section about-section" id="about">
          <About />
        </Element>

        <div className='home_separation'></div>

        {/* Section Projects */}
        <Element name="projects" className="section projects-section" id="projects">
          <Projects />
        </Element>

        <div className='home_separation'></div>

        {/* Section Contact */}
        <Element name="contact" className="section contact-section" id="contact">
          <Contact />
        </Element>

        <Footer />
      </main>
    </div>
  );
};

export default Home;