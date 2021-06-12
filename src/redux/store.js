import { createStore } from 'redux';
import { getTemplateMatrix, getRandomizedMatrix } from '../utils/utils';
import appReducer from './app-reducer';

const INITIAL_DIM = 5;

const initialState = {
  dim: INITIAL_DIM,
  matrix: getRandomizedMatrix(getTemplateMatrix(INITIAL_DIM)),
};

let store = createStore(appReducer, initialState);

window.store = store;

export default store;
