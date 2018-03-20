import React, { Component } from 'react';
import './ContactSection.css';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactForm from '../ContactForm/ContactForm';

class ContactSection extends Component {

  render() {
    return (
      <div className="ContactSection">
        <ContactForm />
        <ContactInfo />
      </div>
    );
  }

}

export default ContactSection;
