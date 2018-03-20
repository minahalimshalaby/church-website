import React, { Component } from 'react';
import './ContactForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

class ContactForm extends Component {

  render() {
    return (
      <div className="ContactForm">
        <div className="ContactForm__content">
          <h2>Send us a message</h2>
          
          <div className="ContactForm__row">
            <Input placeholder="Full Name" />
          </div>
          <div className="ContactForm__row ContactForm__row--double">
            <Input placeholder="Email Address" />
            <Input placeholder="Phone Number" />
          </div>
          <div className="ContactForm__row">
            <Input type="textarea" placeholder="Your Message" />
          </div>
          
          <div className="ContactForm__row ContactForm__row--buttons">
            <Button data-style="yellowFill">Send</Button>
          </div>

        </div>
      </div>
    );
  }

}

export default ContactForm;
