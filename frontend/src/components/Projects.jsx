// Projects.jsx
import React from 'react';
import Cards from './Cards';
import Data from '../data/projects.json';
import '../assets/styles/components/_projects.scss';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Mes Projets</h2>
      <div className="projects_container">
        {Data.map((project) => (
          <Cards
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;