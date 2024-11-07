// Modal.js
import React from 'react';
import '../assets/styles/components/_modale.scss';

const Modal = ({ isOpen, onClose }) => {
  // URL du CV situé dans le dossier public
  const cvUrl = `${process.env.PUBLIC_URL}/CV.pdf`;

  // Si la modale n'est pas ouverte, retourne null pour ne rien afficher
  if (!isOpen) return null;

  // Fonction pour ouvrir le PDF dans un nouvel onglet et imprimer
  const handlePrint = () => {
    const printWindow = window.open(cvUrl, '_blank');
    printWindow.print();
  };

  return (
    <div className="modal">
      {/* Overlay pour fermer la modale lorsqu'on clique en dehors */}
      <div className="modal_overlay" onClick={onClose}></div>
      {/* Contenu de la modale */}
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={onClose}>×</button>
        <h2>Mon CV</h2>
        {/* Affichage du PDF dans la modale */}
        <embed src={cvUrl} type="application/pdf" width="100%" height="600px" />
        <div className="modal_actions">
          {/* Bouton pour télécharger le CV */}
          <a href={cvUrl} download="CV.pdf" className="modal_button">Télécharger</a>
          {/* Bouton pour imprimer le CV */}
          <button onClick={handlePrint} className="modal_button">Imprimer</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;