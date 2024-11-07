// Modal.js
import React from 'react';
import '../assets/styles/components/_modale.scss';

const Modal = ({ isOpen, onClose }) => {
  const cvUrl = `${process.env.PUBLIC_URL}/CV.pdf`;

  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open(cvUrl, '_blank');
    printWindow.print();
  };

  return (
    <div className="modal">
      <div className="modal_overlay" onClick={onClose}></div>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={onClose}>×</button>
        <h2>Mon CV</h2>
        <iframe src={cvUrl} type="application/pdf" width="100%" height="600px" />
        <div className="modal_actions">
          <a href={cvUrl} download="CV.pdf" className="modal_button">Télécharger</a>
          <button onClick={handlePrint} className="modal_button">Imprimer</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;