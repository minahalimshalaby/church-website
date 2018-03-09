import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header__wrapper">
          <div className="Header__logo" />
          <button
            className="Header__button Header__button--donate">
            Donate
          </button>
        </div>
      </div>
    );
  }

}

export default Header;
