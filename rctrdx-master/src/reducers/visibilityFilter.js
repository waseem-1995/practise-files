
//  visibilityFilter reducer invoked for 'SET_VISIBILITY_FILTER' action
//  sets value of visibilityFilter in store state
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
