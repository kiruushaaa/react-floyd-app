import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import s from './ResultSection.module.css';
import { INF, getPath } from '../../utils/utils';

const MatrixCell = props => {
  const [tipContent, setTipContent] = useState('');
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (props.isValid) {
      setTipContent(
        getPath(props.waysStep, props.position.row, props.position.column).join(
          ' ⟶ '
        )
      );
    }
  }, [props.waysStep, props.position, props.isValid]);

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
        <p className={s.tip}>Кратчаший путь: {tipContent}</p>
      )}
    </td>
  );
};

export default MatrixCell;
