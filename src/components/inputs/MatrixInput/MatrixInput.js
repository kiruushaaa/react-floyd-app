import React from 'react';
import s from './MatrixInput.module.css';
import Input from '../Input/Input';

const MatrixInput = (props) => {
  const generateInputLabel = (row, i) => (
    <div className={s.row} key={'row' + i}>
      {row.map((value, j) => (
        <Input
          key={'input' + i + j}
          dim={props.state.dim}
          value={value}
          row={i}
          column={j}
          dispatch={props.dispatch}
        />
      ))}
    </div>
  );

  return (
    <div className={s.matrix}>
      <p>Матрица расстояний:</p>
      <div className={s.container}>
        {props.state.matrix.map(generateInputLabel)}
      </div>
    </div>
  );
};

export default MatrixInput;
