import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../redux/actions';
import './Hamburger.css';

class Hamburger extends Component {

  toggleActive = () => {
    this.props.toggleSidebar(!this.props.active);
  }

  render() {
    const className = 'Hamburger' + ((this.props.active) ? ' Hamburger--active' : '');
    return (
      <div className={ className } onClick={ this.toggleActive } >
        <div className="Hamburger__icon">
          <div className="Hamburger__bar" />
          <div className="Hamburger__bar" />
          <div className="Hamburger__bar" />
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state.sidebar;
}

const mapDispatchToProps = {
  toggleSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
