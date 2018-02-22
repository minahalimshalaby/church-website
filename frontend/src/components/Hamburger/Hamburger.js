import React, { Component } from 'react';
import './Hamburger.css';

class Hamburger extends Component {

  state = {
    active: false,
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const className = 'Hamburger' + ((this.state.active) ? ' Hamburger--active' : '');
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

export default Hamburger;
