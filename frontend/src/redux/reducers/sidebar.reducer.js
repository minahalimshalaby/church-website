import { TOGGLE_SIDEBAR } from '../actions';

const initialState = {
  active: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};
