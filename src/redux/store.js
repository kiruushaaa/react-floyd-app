import { createStore } from 'redux';
import initialState from './initial-state';
import appReducer from './app-reducer';

let store = createStore(
  appReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
