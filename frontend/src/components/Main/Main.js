import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

import Header from '../Header/Header';

class Main extends Component {

  render() {

    const { pathname } = this.props.history.location;
    const pageId = (pathname === '/') ? 'homepage' : pathname;

    const className = 'Main' + ((this.props.active) ? ' Main--sidebar-open' : '');

    return (
      <div
        className={ className }
        data-page={ pageId }>
        <Header />
        { this.props.children }
      </div>
    );
  }

}

const mapStateToProps = state => {
  return state.sidebar;
}

export default connect(mapStateToProps, {  })(Main);
