import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles/components/_contact.scss';

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      setConfirmationMessage('Votre message a bien été envoyé. Merci de m\'avoir contacté !');
      e.target.reset();
      setIsFormFilled(false); // Reset form filled status
    })
    .catch((error) => {
      setConfirmationMessage('Une erreur est survenue. Veuillez réessayer.');
    });
  };

  const handleInputChange = (e) => {
    const form = e.target.form;
    const allFilled = [...form.elements].every((input) => input.type === 'submit' || input.value.trim() !== '');
    setIsFormFilled(allFilled);
  };

  return (
    <section className="contact">
      <h2 className="contact_title">Contactez-moi</h2>
      <form className="contact_form" onSubmit={handleSendEmail}>
        <div className="form_group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" required onChange={handleInputChange} />
        </div>

        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required onChange={handleInputChange} />
        </div>

        <div className="form_group message">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required onChange={handleInputChange}></textarea>
        </div>

        {confirmationMessage && (
          <p className="confirmation_message">{confirmationMessage}</p>
        )}

        <button
          type="submit"
          className={`contact_button ${isFormFilled ? 'filled' : ''}`}
        >
          Envoyer
        </button>
      </form>
      <div className="gradient_contact-1"></div>
      <div className="gradient_contact-2"></div>
    </section>
  );
};

export default Contact;