import React from 'react';
import '../assets/styles/components/_contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <div className='contact_gradient'></div>
      <div className='contact_gradient right'></div>
      <h2 className="contact_title">Contactez-moi</h2>
      <form className="contact_form">
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

        <button type="submit" className="contact_button">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;