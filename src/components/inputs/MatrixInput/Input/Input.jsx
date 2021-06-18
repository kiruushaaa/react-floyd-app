import React, {Fragment} from 'react';
import s from './Input.module.css';
import {INF} from '../../../../utils/utils';

const Input = props => {
  return (
    <Fragment>
      <input
        className={s.input}
        type='text'
        value={props.value === INF ? '∞' : props.value}
        disabled={props.row === props.column}
        onChange={event =>
          props.changeMatrix(event.target.value, {
            row: props.row,
            column: props.column,
          })
        }
      />
    </Fragment>
  );
};

export default Input;
