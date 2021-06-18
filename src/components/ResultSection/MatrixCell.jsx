import React from 'react';
import classNames from 'classnames';
import s from './ResultSection.module.css';
import { INF } from '../../utils/utils';

const MatrixCell = props => {
  let className = classNames(s.matrix__cell, {
    [s.neg]: props.isNegative,
    [s.trail]: props.isTrailing,
  });

  return (
    <td className={className}>{props.value === INF ? '∞' : props.value}</td>
  );
};

export default MatrixCell;
