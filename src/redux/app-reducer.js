import cloneDeep from 'lodash.clonedeep';
import initialState from './initial-state';
import { getRandomizedMatrix } from '../utils/utils';
import { floyd } from '../algorithm/floyd';

const CHANGE_DIM = 'CHANGE_DIM';
const CHANGE_MATRIX = 'CHANGE_MATRIX';
const FILL_MATRIX_RANDOM = 'FILL_MATRIX_RANDOM';
const RUN_ALGORITHM = 'RUN_ALGORITHM';

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_DIM:
      return {
        ...state,
        dim: payload,
        matrix: getRandomizedMatrix(payload),
        info: cloneDeep(initialState.info),
      };
    case CHANGE_MATRIX:
      let { value, row, column } = payload;
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
        info: cloneDeep(initialState.info),
      };
    case FILL_MATRIX_RANDOM:
      return {
        ...state,
        matrix: getRandomizedMatrix(state.dim, payload.isPositive ? 0 : undefined),
        info: cloneDeep(initialState.info),
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

export const fillMatrixRandomActionCreator = (isPositive) => ({
  type: FILL_MATRIX_RANDOM,
  payload: { isPositive }
});

export const runAlgorithmActionCreator = () => ({
  type: RUN_ALGORITHM,
});

export default appReducer;
