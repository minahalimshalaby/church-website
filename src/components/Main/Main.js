import React, { Component } from 'react';
import './Main.css';

import Header from '../Header/Header';

class Main extends Component {

  render() {
    return (
      <div className="Main">
        <Header />
        { this.props.children }
      </div>
    );
  }

}

export default Main;
