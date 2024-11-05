import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import data from '../data/projects.json';
import '../assets/styles/components/_projectDetail.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.find(project => project.id === parseInt(id));

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <>
    <Navbar isTop />
    <div className="project-details-page">
      <section className="project-details">
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="project-details_image" />
        <div className="project-details_content">
          <p>{project.detailedDescription}</p>
          <img src={project.logoUrl} alt={`${project.title} logo`} className="project-details_logo" />
          <div className="project-details_skills">
            <h3>Compétences utilisées :</h3>
            <ul>
              {project.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-details_link">
            Voir le projet
          </a>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default ProjectDetail;