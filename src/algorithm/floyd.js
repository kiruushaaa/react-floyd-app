import cloneDeep from 'lodash.clonedeep';
import { INF, getTemplateMatrix, getPath } from '../utils/utils';

export const floyd = _matrix => {
  const ways = getTemplateMatrix(_matrix.length, 1);
  const matrix = cloneDeep(_matrix);

  const info = {
    matrixHistory: new Map(),
    waysHistory: new Map(),
    negativeWeightCycle: { exists: false },
  };

  for (let k = 0; k < matrix.length; k++) {
    for (let i = 0; i < matrix.length; i++) {
      if (i === k) continue;
      for (let j = 0; j < matrix.length; j++) {
        if (j === k) continue;
        if (
          matrix[i][k] < INF &&
          matrix[k][j] < INF &&
          matrix[i][j] > matrix[i][k] + matrix[k][j]
        ) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
          ways[i][j] = ways[i][k];

          if (i === j && matrix[i][i] < 0) {
            info.matrixHistory.set(k + 1, { step: cloneDeep(matrix) });
            info.waysHistory.set(k + 1, { step: cloneDeep(ways) });
            info.negativeWeightCycle = {
              exists: true,
              index: i,
              weight: Number(matrix[i][i]),
              path: getPath(ways, i),
            };

            return info;
          }
        }
      }
    }

    info.matrixHistory.set(k + 1, { step: cloneDeep(matrix) });
    info.waysHistory.set(k + 1, { step: cloneDeep(ways) });
  }

  return info;
};
