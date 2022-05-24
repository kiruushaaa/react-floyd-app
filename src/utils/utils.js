import random from 'lodash/random';

export const INF = 9999999;

export const getTemplateMatrix = (dim, acc = 0) =>
  [...Array(dim).keys()].map(_ => [...Array(dim).keys()].map(i => i + acc));

export const getRandomizedMatrix = (dim, min = -5, max = 20) =>
  getTemplateMatrix(dim).map((row, i) => row.map((_, j) => (i === j ? INF : random(min, max))));

export const getPath = (matrix, i, j = i) => {
  let _matrix = matrix.map(row => row.map(value => value - 1));
  let path = [];
  let u = i;

  do {
    path.push(u);
    u = _matrix[u][j];
  } while (u !== j);
  path.push(j);

  return path.map(value => value + 1);
};

export const getNormalValue = (input, max = INF) =>
  !!Number(input)
    ? Number(input) < max
      ? Number(input)
      : max
    : INF;
