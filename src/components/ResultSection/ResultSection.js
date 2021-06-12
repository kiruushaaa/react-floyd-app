import React from 'react';
import s from './ResultSection.module.css';
import { INF } from '../../utils/utils';

const ResultSection = (props) => {
  const info = props.state.info;

  const stepsMatrices = [...info.matrixHistory.values()].map(
    (data) => data.step
  );
  const stepsWays = [...info.waysHistory.values()].map((data) => data.step);

  const negativeCycle = info.negativeWeightCycle;

  const generateList = (data, isInfo = false) => {
    const postfix = isInfo ? 'info' : '';

    return data.map((matrix, iteration) => (
      <li className={s.list__item} key={'matrix' + postfix + iteration}>
        <table className={s.matrix}>
          <tbody>
            {matrix.map((row, i) => (
              <tr className={s.matrix__row} key={'row' + postfix + i}>
                {row.map((value, j) => (
                  <td className={s.matrix__cell} key={'cell' + postfix + i + j}>
                    {value === INF ? '∞' : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </li>
    ));
  };

  return (
    <div className={s.container}>
      <div>
        <p>Матрица расстояний на каждой итерации:</p>
        <ol className={s.list}>{generateList(stepsMatrices)}</ol>
      </div>

      <div>
        <p>Справочная матрица:</p>
        <ol>{generateList(stepsWays, true)}</ol>
      </div>

      {negativeCycle.exists && (
        <div>
          <p>Цикл отрицательной длины ({negativeCycle.weight}):</p>
          <p>{negativeCycle.path.reverse().join(' ⟶ ')}</p>
        </div>
      )}
    </div>
  );
};

export default ResultSection;
