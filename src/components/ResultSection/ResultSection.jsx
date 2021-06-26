import React, { Fragment } from 'react';
import classNames from 'classnames';
import MatrixCellContainer from './MatrixCellContainer';
import s from './ResultSection.module.css';

const ResultSection = props => {
  const generateList = (data, isInfo = false) => {
    let negativeIdx = !isInfo && props.negativeWeightCycle.index;

    return (
      <ol className={s.list}>
        {data.map((matrix, step) => (
          <li className={s.list__item} key={'matrix' + step}>
            <table className={s.matrix}>
              <tbody className={s.matrix__inner}>
                {matrix.map((row, i) => (
                  <tr
                    className={classNames(s.matrix__row, {
                      [s.trail]: !isInfo && step === i,
                    })}
                    key={'row' + i}>
                    {row.map((value, j) => (
                      <MatrixCellContainer
                        key={'cell' + i + j}
                        position={{ row: i, column: j }}
                        value={value}
                        isValid={
                          !props.negativeWeightCycle.exists &&
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
      {props.matrixHistory.length > 0 && (
        <Fragment>
          <div>
            <p>Матрица расстояний на каждой итерации:</p>
            {generateList(props.matrixHistory)}
          </div>

          <div>
            <p>Справочная матрица:</p>
            {generateList(props.waysHistory, true)}
          </div>
        </Fragment>
      )}

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
