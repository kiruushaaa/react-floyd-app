import {
  getTemplateMatrix,
  getRandomizedMatrix,
  numberifyMatrix,
} from '../utils/utils';
import { floyd } from '../algorithm/floyd';

const INITIAL_DIM = 5;

const initialState = {
  dim: INITIAL_DIM,
  matrix: getRandomizedMatrix(getTemplateMatrix(INITIAL_DIM)),
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DIM':
      state.dim = action.payload.dim;
      state.matrix = getRandomizedMatrix(getTemplateMatrix(action.payload.dim));
      return state;
    case 'CHANGE_MATRIX':
      let row = action.payload.row;
      let column = action.payload.column;
      state.matrix[row][column] = action.payload.value;
      return state;
    case 'FILL_RANDOM_MATRIX':
      state.matrix = getRandomizedMatrix(state.matrix);
      return state;
    case 'RUN_ALGORITHM':
      state.info = floyd(state.dim, numberifyMatrix(state.matrix));
      return state;
    default:
      return state;
  }
};

export default appReducer;
