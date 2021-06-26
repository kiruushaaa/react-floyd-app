import { getRandomizedMatrix } from '../utils/utils';

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

export default initialState;
