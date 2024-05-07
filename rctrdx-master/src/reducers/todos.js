
//  helper reducer invoked by todos reducer for each single task
//  depending on action type either generates new task (ADD_TODO) or
//  toggles given task state (TOGGLE_TODO)
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

//  copies existing state and returns a new version with either a new task or
//  toggled state of one of the existings tasks
//  invokes todo helper reducer each time to handle single task
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action),
      );
    default:
      return state;
  }
};

export default todos;
