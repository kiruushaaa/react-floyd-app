import { getRandomizedMatrix } from '../utils/utils';
import { floyd } from '../algorithm/floyd';

const CHANGE_DIM = 'CHANGE_DIM';
const CHANGE_MATRIX = 'CHANGE_MATRIX';
const FILL_MATRIX_RANDOM = 'FILL_MATRIX_RANDOM';
const RUN_ALGORITHM = 'RUN_ALGORITHM';

const appReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_DIM:
      return {
        ...state,
        dim: action.payload,
        matrix: getRandomizedMatrix(action.payload),
      };
    case CHANGE_MATRIX:
      let { value, row, column } = action.payload;
      return {
        ...state,
        matrix: [
          ...state.matrix.slice(0, row),
          [
            ...state.matrix[row].slice(0, column),
            value,
            ...state.matrix[row].slice(column + 1),
          ],
          ...state.matrix.slice(row + 1),
        ],
      };
    case FILL_MATRIX_RANDOM:
      return {
        ...state,
        matrix: getRandomizedMatrix(state.dim),
      };
    case RUN_ALGORITHM:
      return {
        ...state,
        info: { ...state.info, ...floyd(state.matrix) },
      };
    default:
      return state;
  }
};

export const changeDimActionCreator = dim => ({
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
