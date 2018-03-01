import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';

import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/Navigation';

class Sidebar extends Component {

  render() {
    const className = 'Sidebar' + ((this.props.active) ? ' Sidebar--active' : '');
    return (
      <div className={ className }>

        <div className="Sidebar__header">
          <div className="Sidebar__logo" />
        </div>

        <Navigation />

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state.sidebar;
};

export default connect(mapStateToProps, {  })(Sidebar);
