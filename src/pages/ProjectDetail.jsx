import React from 'react';
import NavbarDetail from '../components/NavbarDetail';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import data from '../data/projects.json';
import '../assets/styles/components/_projectDetail.scss';

const ProjectDetail = () => {
  // Récupération de l'ID du projet depuis l'URL
  const { id } = useParams();

  // Recherche du projet correspondant dans les données JSON en fonction de l'ID
  const project = data.find(project => project.id === parseInt(id));

  // Affichage d'un message si le projet n'est pas trouvé
  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div className="project-details-page">
      <NavbarDetail />
      {/* Section principale contenant les détails du projet */}
      <section className="project-details">
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="project-details_image" />

        <div className="project-details_content">
          <p>{project.detailedDescription}</p>
          {project.logoUrl && (
            <img src={project.logoUrl} alt={`${project.title} logo`} className="project-details_logo" />
          )}
          <div className="project-details_skills">
            <h3>Compétences utilisées :</h3>
            <ul>
              {project.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Lien externe pour accéder au projet complet, ouvrant dans un nouvel onglet */}
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-details_link">
            Voir le projet
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;