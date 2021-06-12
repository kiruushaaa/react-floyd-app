import {
  getTemplateMatrix,
  getRandomizedMatrix,
  numberifyMatrix,
} from '../utils/utils';
import { floyd } from '../algorithm/floyd';

const CHANGE_DIM = 'CHANGE_DIM';
const CHANGE_MATRIX = 'CHANGE_MATRIX';
const FILL_MATRIX_RANDOM = 'FILL_MATRIX_RANDOM';
const RUN_ALGORITHM = 'RUN_ALGORITHM';

const appReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_DIM:
      state.dim = action.payload;
      state.matrix = getRandomizedMatrix(getTemplateMatrix(action.payload));
      return state;
    case CHANGE_MATRIX:
      let row = action.payload.row;
      let column = action.payload.column;
      state.matrix[row][column] = action.payload.value;
      return state;
    case FILL_MATRIX_RANDOM:
      state.matrix = getRandomizedMatrix(state.matrix);
      return state;
    case RUN_ALGORITHM:
      state.info = floyd(state.dim, numberifyMatrix(state.matrix));
      return state;
    default:
      return state;
  }
};

export const changeDimActionCreator = (dim) => ({
  type: CHANGE_DIM,
  payload: dim,
});

export const changeMatrixActionCreator = (value, params) => ({
  type: CHANGE_MATRIX,
  payload: {
    value,
    ...params,
  },
});

export const fillMatrixRandomActionCreator = () => ({
  type: FILL_MATRIX_RANDOM,
});

export const runAlgorithmActionCreator = () => ({
  type: RUN_ALGORITHM,
});

export default appReducer;
