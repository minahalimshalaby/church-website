import React, { Component } from 'react';
import './Sidebar.css';

import Hamburger from '../Hamburger/Hamburger';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">

        <div className="Sidebar__header">
          <Hamburger />
          <div className="Sidebar__logo" />
        </div>

      </div>
    );
  }

}

export default Sidebar;
