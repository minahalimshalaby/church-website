import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {

  render() {
    return (
      <div className="Navigation">
      
        <div className="Navigation__item Navigation__item--active" data-type="our_ministries">
          <div className="Navigation__icon" />
          <div className="Navigation__text">Home</div>
        </div>
      
        <div className="Navigation__item" data-type="our_ministries">
          <div className="Navigation__icon" />
          <div className="Navigation__text">Our Ministries</div>
        </div>
        
        <div className="Navigation__item" data-type="sermons">
          <div className="Navigation__icon" />
          <div className="Navigation__text">Sermons</div>
        </div>
        
        <div className="Navigation__item" data-type="sermons">
          <div className="Navigation__icon" />
          <div className="Navigation__text">Online Giving</div>
        </div>
        
        <div className="Navigation__item" data-type="about">
          <div className="Navigation__icon" />
          <div className="Navigation__text">About Us</div>
        </div>
        
        <div className="Navigation__item" data-type="contact">
          <div className="Navigation__icon" />
          <div className="Navigation__text">Contact Us</div>
        </div>

      </div>
    );
  }

}

export default Navigation;
