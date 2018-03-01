import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './redux/reducers';

import HomePage from './views/HomePage/HomePage';

import './index.css';
import Sidebar from './components/Sidebar/Sidebar';
import Hamburger from './components/Hamburger/Hamburger';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={ ReduxStore }>
    <Router>
      <div className="App">

        <Hamburger />
        <Sidebar />

        <Route exact path="/" component={ HomePage } />

      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
