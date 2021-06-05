import React from 'react';
import Input from '../Input/Input';

const MatrixInput = (props) => {
  const generateInputLabel = (values, i) =>
    values.map((value, j) => {
      return (
        <Input
          dim={props.state.dim}
          value={value}
          row={i}
          column={j}
          dispatch={props.dispatch}
        />
      );
    });

  return (
    <div>
      <p>Матрица расстояний:</p>
      <div>{props.state.matrix.map(generateInputLabel)}</div>
    </div>
  );
};

export default MatrixInput;
