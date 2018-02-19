import React, { Component } from 'react';
import './Sidebar.css';

import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">

        <div className="Sidebar__header">
          <Hamburger />
          <div className="Sidebar__logo" />
        </div>

        <Navigation />

      </div>
    );
  }

}

export default Sidebar;
