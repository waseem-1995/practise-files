import { combineReducers } from 'redux';
import todos from '../reducers/todos';
import visibilityFilter from './visibilityFilter';


//  combines separate reducers into one default reducer
//  chooses(?) proper reducer depending on action passed to it
//  sets 2 keys in store state: todos and visibilityFilter
const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
