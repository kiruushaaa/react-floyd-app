import React, { useState } from 'react';
import classNames from 'classnames';
import s from './ResultSection.module.css';
import { INF, getPath } from '../../utils/utils';

const MatrixCell = props => {
  const [shown, setShown] = useState(false);

  let className = classNames(s.matrix__cell, {
    [s.neg]: props.isNegative,
    [s.trail]: props.isTrailing,
    [s.valid]: props.isValid,
  });

  return (
    <td
      className={className}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}>
      <p>{props.value === INF ? '∞' : props.value}</p>
      {props.isValid && props.value !== INF && shown && (
        <p className={s.tip}>
          Кратчаший путь: {getPath(props.waysStep, props.position.row, props.position.column).join(' ⟶ ')}
        </p>
      )}
    </td>
  );
};

export default MatrixCell;
