export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggleSidebar = (status = false) => {

  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      active: status,
    },
  };

};