// Cards.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/components/_Cards.scss';

const Cards = ({ id, title, description, imageUrl }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <img src={imageUrl} alt={title} className="project-card_image" />
      <div className="project-card_content">
        <h3 className="project-card_title">{title}</h3>
        <p className="project-card_description">{description}</p>
      </div>
    </div>
  );
};

export default Cards;