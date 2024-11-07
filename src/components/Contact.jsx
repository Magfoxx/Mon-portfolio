import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/components/_contact.scss';

const Contact = () => {
  // États pour gérer le message de confirmation et le statut de remplissage du formulaire
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  // Fonction pour envoyer l'email en utilisant EmailJS
  const handleSendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Appel de l'API emailjs pour envoyer le formulaire avec les identifiants de l'environnement
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setConfirmationMessage('Votre message a bien été envoyé. Merci de m\'avoir contacté !');
      e.target.reset(); // Réinitialise le formulaire
      setIsFormFilled(false); // Réinitialise le statut de remplissage du formulaire
    })
    .catch((error) => {
      setConfirmationMessage('Une erreur est survenue. Veuillez réessayer.');
    });
  };

  // Fonction pour gérer le changement de statut du formulaire
  const handleInputChange = (e) => {
    const form = e.target.form;
    // Vérifie si tous les champs sont remplis pour activer le bouton de soumission
    const allFilled = [...form.elements].every((input) => input.type === 'submit' || input.value.trim() !== '');
    setIsFormFilled(allFilled);
  };

  return (
    <section className="contact">
      <h2 className="contact_title">Contactez-moi</h2>
      <form className="contact_form" onSubmit={handleSendEmail}>
        {/* Champ pour le nom */}
        <div className="form_group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleInputChange}
            autoComplete="name"
          />
        </div>

        {/* Champ pour l'email */}
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>

        {/* Champ pour le message */}
        <div className="form_group message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            onChange={handleInputChange}
            autoComplete="off"
          ></textarea>
        </div>

        {/* Message de confirmation après l'envoi */}
        {confirmationMessage && (
          <p className="confirmation_message">{confirmationMessage}</p>
        )}

        {/* Bouton de soumission, activé lorsque le formulaire est rempli */}
        <button
          type="submit"
          className={`contact_button ${isFormFilled ? 'filled' : ''}`}
        >
          Envoyer
        </button>
      </form>
      {/* Ajout d'éléments de style */}
      <div className="gradient_contact-1"></div>
      <div className="gradient_contact-2"></div>
    </section>
  );
};

export default Contact;