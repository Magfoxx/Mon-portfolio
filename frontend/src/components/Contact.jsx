import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/components/_contact.scss';

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_kj0rpm5',
      'template_s1ttwd8',
      e.target,
      'TqQM7c4Tg83qBRzO8')
      .then((result) => {
        setConfirmationMessage('Votre message a bien été envoyé. Merci de m\'avoir contacté !');
        e.target.reset();
      })
      .catch((error) => {
        setConfirmationMessage('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  return (
    <section className="contact">
      <h2 className="contact_title">Contactez-moi</h2>
      <form className="contact_form" onSubmit={handleSendEmail}>
        <div className="form_group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form_group message">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        {confirmationMessage && (
          <p className="confirmation_message">{confirmationMessage}</p>
        )}

        <button type="submit" className="contact_button">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;