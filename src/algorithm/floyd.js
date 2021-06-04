import { INF, getTemplateMatrix, getPath } from '../utils/utils';
import cloneDeep from 'lodash/cloneDeep';

export const floyd = (dim, _matrix) => {
  const ways = getTemplateMatrix(dim);
  const matrix = cloneDeep(_matrix);

  const info = {
    matrixHistory: new Map(),
    waysHistory: new Map(),
    negativeWeightCycle: { exists: false },
    shortestPath: { exists: false },
  };

  for (let k = 0; k < dim; k++) {
    for (let i = 0; i < dim; i++) {
      for (let j = 0; j < dim; j++) {
        if (
          matrix[i][k] < INF &&
          matrix[k][j] < INF &&
          matrix[i][j] > matrix[i][k] + matrix[k][j]
        ) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
          ways[i][j] = ways[i][k];

          if (i === j && matrix[i][i] < 0) {
            const path = getPath(ways, i);

            info.matrixHistory.set(k + 1, { step: cloneDeep(matrix) });
            info.waysHistory.set(k + 1, { step: cloneDeep(ways) });
            info.negativeWeightCycle = {
              exists: true,
              index: i,
              weight: Number(matrix[i][i]),
              path,
            };

            return info;
          }
        }
      }
    }

    info.matrixHistory.set(k + 1, { step: cloneDeep(matrix) });
    info.waysHistory.set(k + 1, { step: cloneDeep(ways) });
  }

  const lastMatrix = info.matrixHistory.get(dim).step;
  const lastWays = info.waysHistory.get(dim).step;

  const min = Math.min(...lastMatrix.map((row) => Math.min(...row)));
  const mins = lastMatrix
    .map((row, i) => row.includes(min) && { row: i, column: row.indexOf(min) })
    .filter(Boolean);

  info.shortestPath = {
    exists: true,
    index: mins,
    weight: min,
    path: mins.map((item) =>
      getPath(lastWays, Number(item.row), Number(item.column))
    ),
  };

  return info;
};
