import random from 'lodash/random';

export const INF = 9999999;

export const getTemplateMatrix = (dim) =>
  [...Array(dim).keys()].map((_) => [...Array(dim).keys()].map((i) => i + 1));

export const getRandomizedMatrix = (matrix, min = -5, max = 20) =>
  matrix.map((row, i) => {
    return row.map((_, j) => (i === j ? INF : random(min, max)));
  });

export const numberifyMatrix = (matrix) =>
  matrix.map((row) => row.map((value) => Number(value)));

export const getPath = (matrix, i, j = i) => {
  let _matrix = matrix.map((row) => row.map((value) => value - 1));
  let path = [];
  let u = i;

  do {
    path.push(u);
    u = _matrix[u][j];
  } while (u !== j);
  path.push(j);

  return path.map((value) => value + 1);
};
