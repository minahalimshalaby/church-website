export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggleSidebar = (status = false) => {

  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      active: status,
    },
  };

};

export const UPDATE_HISTORY = 'UPDATE_HISTORY';

export const updateHistory = (history = {}) => {

  return {
    type: UPDATE_HISTORY,
    payload: {
      _history: history,
    },
  };

};
