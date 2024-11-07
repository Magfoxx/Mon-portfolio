import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/components/_Cards.scss';

const Cards = ({ id, title, description, imageUrl }) => {
  // Utilise le hook `useNavigate` pour naviguer entre les pages
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur la carte
  const handleCardClick = () => {
    // Redirige l'utilisateur vers la page de détail du projet en utilisant l'ID du projet
    navigate(`/project/${id}`);
  };

  return (
    // Conteneur de la carte de projet, avec une fonction de clic pour naviguer
    <div className="project-card" onClick={handleCardClick}>
      {/* Image du projet */}
      <img src={imageUrl} alt={title} className="project-card_image" />
      
      {/* Contenu de la carte comprenant le titre et la description */}
      <div className="project-card_content">
        <h3 className="project-card_title">{title}</h3>
        <p className="project-card_description">{description}</p>
      </div>
    </div>
  );
};

export default Cards;