import React, { Component } from 'react';
import './ScreenView.css';

class ScreenView extends Component {

  render() {
    return (
      <div className="ScreenView">
        { this.props.children }
      </div>
    );
  }

}

export default ScreenView;
