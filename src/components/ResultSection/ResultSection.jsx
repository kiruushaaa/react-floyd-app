import React, { useState } from 'react';
import cn from 'classnames';
import MatrixCellContainer from './MatrixCellContainer';
import { getPath } from '../../utils/utils';

import s from './ResultSection.module.css';
import input from '../inputs/MatrixInput/Input/Input.module.css';

const ResultSection = ({ matrixHistory, waysHistory, negativeWeightCycle, dim }) => {
  const [[start, end], setNodes] = useState([1, 1]);

  const setStart = ({ target: { value } }) => {
    const start = Number(value);

    setNodes(([prevStart, end]) => [
      start >= 1 && start <= dim ? start : prevStart, end
    ]);
  };

  const setEnd = ({ target: { value } }) => {
    const end = Number(value);

    setNodes(([start, prevEnd]) => [
      start, end >= 1 && end <= dim ? end : prevEnd
    ]);
  };

  const generateList = (data, isInfo = false) => {
    let negativeIdx = !isInfo && negativeWeightCycle.index;

    return (
      <ol className={s.list}>
        {data.map((matrix, step) => (
          <li className={s.list__item} key={'matrix' + step}>
            <table className={s.matrix}>
              <tbody className={s.matrix__inner}>
                {matrix.map((row, i) => (
                  <tr
                    className={cn(s.matrix__row, {
                      [s.trail]: !isInfo && step === i,
                    })}
                    key={'row' + i}>
                    {row.map((value, j) => (
                      <MatrixCellContainer
                        key={'cell' + i + j}
                        position={{ row: i, column: j }}
                        value={value}
                        isValid={
                          !negativeWeightCycle.exists &&
                          step === data.length - 1 &&
                          !isInfo
                        }
                        isNegative={
                          step === data.length - 1 &&
                          negativeIdx === i &&
                          negativeIdx === j
                        }
                        isTrailing={!isInfo && step === j}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className={s.container}>
      {matrixHistory.length > 0 && (
        <>
          <div>
            <p>Матрица расстояний на каждой итерации:</p>
            {generateList(matrixHistory)}
          </div>

          <div>
            <p>Справочная матрица:</p>
            {generateList(waysHistory, true)}
          </div>
        </>
      )}

      {negativeWeightCycle.exists && (
        <div>
          <p>Цикл отрицательной длины ({negativeWeightCycle.weight}):</p>
          <p>{negativeWeightCycle.path.reverse().join(' ⟶ ')}</p>
        </div>
      )}

      {!negativeWeightCycle.exists && matrixHistory.length > 0  && (
        <div className={s.shortestPath}>
          <p>Найти путь:</p>
          <div>
            <input
              className={ cn(input.input, s.input) }
              type="number"
              value={start}
              onChange={setStart}
            />
            ⟶
            <input
              className={ cn(input.input, s.input) }
              type="number"
              value={end}
              onChange={setEnd}
            />
          </div>
          <p>{getPath(waysHistory[dim - 1], start - 1, end - 1).join(' ⟶ ')}</p>
          <p>Расстояние: {matrixHistory[dim - 1][start - 1][end - 1]}</p>
        </div>
      )}
    </div>
  );
};

export default ResultSection;
