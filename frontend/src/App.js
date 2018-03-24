import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHistory } from './redux/actions';

import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './views/HomePage/HomePage';

class App extends Component {

  componentWillMount() {
    this.props.updateHistory(this.props.history);
  }

  render() {
    return (
      <div className="App"
        data-homepage={ this.props.history.location.pathname === '/' }
        data-sidebar-open={ this.props.sidebar.active } >

        <Route path="/" component={ Sidebar } />
        <Route exact path="/" component={ HomePage } />

      </div>
    );
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  updateHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
