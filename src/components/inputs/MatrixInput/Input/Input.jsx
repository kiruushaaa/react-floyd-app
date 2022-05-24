import React from 'react';
import s from './Input.module.css';
import {INF} from '../../../../utils/utils';

const Input = props => {
  const onChange = event => {
    props.changeMatrix(event.target.value.replace('∞', ''), {
      row: props.row,
      column: props.column,
    })
  }

  return (
    <>
      <input
        className={s.input}
        type='text'
        value={props.value === INF ? '∞' : props.value}
        disabled={props.row === props.column}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
