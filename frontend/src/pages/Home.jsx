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

        {/* Section About */}
        <Element name="about" className="section about-section" id="about">
          <About />
        </Element>

        {/* Section Projects */}
        <Element name="projects" className="section projects-section" id="projects">
          <Projects />
        </Element>

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