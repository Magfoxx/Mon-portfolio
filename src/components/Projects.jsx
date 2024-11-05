import React from 'react';
import Cards from './Cards';
import data from '../data/projects.json';
import '../assets/styles/components/_projects.scss';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Mes Projets</h2>
      <div className="projects_container">
        {data.map(project => (
          <Cards
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <div className="gradient_projects-1"></div>
      <div className="gradient_projects-2"></div>
      <div className="gradient_projects-3"></div>
    </section>
  );
};

export default Projects;