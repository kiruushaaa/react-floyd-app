import React from 'react';
import s from './ResultSection.module.css';
import { INF } from '../../utils/utils';

const ResultSection = props => {
  const generateList = (data, isInfo = false) => {
    let postfix = isInfo ? 'info' : '';

    return (
      <ol className={s.list}>
        {data.map((matrix, iteration) => (
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
        ))}
      </ol>
    );
  };

  return (
    <div className={s.container}>
      <div>
        <p>Матрица расстояний на каждой итерации:</p>
        {generateList(props.matrixHistory)}
      </div>

      <div>
        <p>Справочная матрица:</p>
        {generateList(props.waysHistory, true)}
      </div>

      {props.negativeWeightCycle.exists && (
        <div>
          <p>Цикл отрицательной длины ({props.negativeWeightCycle.weight}):</p>
          <p>{props.negativeWeightCycle.path.reverse().join(' ⟶ ')}</p>
        </div>
      )}
    </div>
  );
};

export default ResultSection;
