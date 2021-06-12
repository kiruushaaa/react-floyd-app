import React from 'react';
import s from './Input.module.css';
import { INF } from '../../../utils/utils';
import { changeMatrixActionCreator } from '../../../redux/app-reducer';

const Input = (props) => {
  const getNormalValue = (input) =>
    !!Number(input) ? (Number(input) < INF ? Number(input) : INF) : 0;

  const inputChangeHandler = (event, params) => {
    const value = getNormalValue(event.target.value);
    props.dispatch(changeMatrixActionCreator(value, params));
  };

  return (
    <React.Fragment>
      <input
        className={s.input}
        type='text'
        value={!!props.value ? (props.value === INF ? '∞' : props.value) : 0}
        disabled={props.row === props.column}
        onChange={(event) =>
          inputChangeHandler(event, { row: props.row, column: props.column })
        }
      />
    </React.Fragment>
  );
};

export default Input;
