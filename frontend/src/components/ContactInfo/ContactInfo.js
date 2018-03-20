import React, { Component } from 'react';
import './ContactInfo.css';

class ContactInfo extends Component {

  render() {
    return (
      <div className="ContactInfo">
        <div className="ContactInfo__bgImage" />
        <div className="ContactInfo__overlay" />
        <div className="ContactInfo__gradient" />
        <div className="ContactInfo__content">
          <h2>Contact Information</h2>
          
          
          <div className="ContactInfo__item">
            <div className="ContactInfo__item__icon ContactInfo__item__icon--church" />
            <div className="ContactInfo__item__text">
              <div className="ContactInfo__item__label">Address</div>
              <div className="ContactInfo__item__value">
                6200 West Foster Avenue,<br/>
                Chicago, IL - 60625
              </div>
            </div>
          </div>
          <div className="ContactInfo__item">
            <div className="ContactInfo__item__icon ContactInfo__item__icon--phone" />
            <div className="ContactInfo__item__text">
              <div className="ContactInfo__item__label">Phone</div>
              <div className="ContactInfo__item__value">1.773.628.7737</div>
            </div>
          </div>
          <div className="ContactInfo__item">
            <div className="ContactInfo__item__icon ContactInfo__item__icon--facebook" />
            <div className="ContactInfo__item__text">
              <div className="ContactInfo__item__label">Facebook</div>
              <div className="ContactInfo__item__value">facebook.com/ipachicago</div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default ContactInfo;
