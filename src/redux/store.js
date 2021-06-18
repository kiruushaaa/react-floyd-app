import { createStore } from 'redux';
import { getRandomizedMatrix } from '../utils/utils';
import appReducer from './app-reducer';

const INITIAL_DIM = 5;

const initialState = {
  dim: INITIAL_DIM,
  matrix: getRandomizedMatrix(INITIAL_DIM),
  info: {
    matrixHistory: new Map(),
    waysHistory: new Map(),
    negativeWeightCycle: { exists: false },
  },
};

let store = createStore(
  appReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
