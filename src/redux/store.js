import { combineReducers, createStore } from 'redux';
import appReducer from './app-reducer';

let reducers = combineReducers({ appState: appReducer });

let store = createStore(reducers);

window.store = store;

export default store;
