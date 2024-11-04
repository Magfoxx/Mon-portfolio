// ProjectCard.jsx
import React from 'react';
import '../assets/styles/components/_Cards.scss';

const Cards = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-card_image" />
      <div className="project-card_content">
        <h3 className="project-card_title">{title}</h3>
        <p className="project-card_description">{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-card_link">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default Cards;