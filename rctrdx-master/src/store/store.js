import { createStore } from 'redux';
import todoApp from '../reducers/index';


//  creates redux store with todoApp as a main reducer
//  second argument allows chrome redux devtools to read state from redux store
const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
