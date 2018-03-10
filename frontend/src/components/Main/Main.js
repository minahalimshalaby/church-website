import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, {  })(Main);
