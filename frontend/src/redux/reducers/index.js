import { combineReducers } from 'redux';

import _history from './history.reducer';
import sidebar from './sidebar.reducer';

export default combineReducers({
  _history,
  sidebar,
});
