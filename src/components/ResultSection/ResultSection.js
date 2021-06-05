import React from 'react';
import s from './ResultSection.module.css';
import { INF } from '../../utils/utils';

const ResultSection = (props) => {
  const stepsMatrices = [...props.state.info.matrixHistory.values()].map(
    (data) => data.step
  );
  const stepsWays = [...props.state.info.waysHistory.values()].map(
    (data) => data.step
  );

  const negativeCycle = props.state.info.negativeWeightCycle;
  const shortestPath = props.state.info.shortestPath;

  const generateList = (data) =>
    data.map((matrix) => (
      <li className={s.list__item}>
        <table className={s.matrix}>
          {matrix.map((row, i) => (
            <tr className={s.matrix__row}>
              {row.map((value, j) => (
                <td className={s.matrix__cell}>
                  {value === INF ? '∞' : value}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </li>
    ));

  return (
    <div className={s.container}>
      <div>
        <p>Матрица расстояний на каждой итерации:</p>
        <ol className={s.list}>{generateList(stepsMatrices)}</ol>
      </div>

      <div>
        <p>Справочная матрица:</p>
        <ol>{generateList(stepsWays)}</ol>
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
