import React from 'react';
import '../assets/styles/components/_about.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about_title">À propos de moi</h2>
      <div className="about_content">
        <p>Je me présente, <strong>Martial Hamcha</strong>, développeur web junior ayant un parcours atypique et riche en expériences. Avant de m’engager pleinement dans le développement web, j’ai eu l’opportunité de travailler dans différents secteurs, notamment en tant que militaire, mécanicien et électricien. Ces expériences variées ont renforcé ma capacité d’adaptation et mon esprit analytique, des qualités qui me servent aujourd’hui dans le monde du développement.</p>
        
        <p>Depuis toujours, je suis attiré par la création de sites internet. Cependant, ce n'est que récemment que j’ai eu l’occasion de me former dans ce domaine qui me passionne. J’ai suivi un programme intensif de six mois en développement web, où j’ai acquis des compétences solides en HTML, CSS, JavaScript, Node.js, Express, MongoDB et le SEO. Ce portfolio est le fruit de mon parcours et représente mon premier projet complet.</p>
        
        <p>Aujourd’hui, je suis déterminé à continuer d’apprendre et à approfondir mes connaissances. Mon objectif est d’acquérir de l’expérience au sein d’une équipe dynamique, avec la possibilité, à terme, de développer mes propres projets. Bien que je ne me sois pas encore fixé sur une carrière freelance, c’est une option que je considère sérieusement pour l’avenir.</p>

        <p><em>Ma vision</em> : Concevoir des expériences utilisateur intuitives et efficaces, tout en continuant à évoluer en tant que développeur.</p>
      </div>
    </section>
  );
};

export default About;