import React from 'react';
import { getTemplateMatrix } from '../../../utils/utils';
import InputContainer from './Input/InputContainer';
import s from './MatrixInput.module.css';

const MatrixInput = props => {
  const template = getTemplateMatrix(props.dim);

  return (
    <div className={s.matrix}>
      <p>Матрица расстояний:</p>
      <div className={s.container}>
        {template.map((row, i) => (
          <div className={s.row} key={i}>
            {row.map(j => (
              <InputContainer key={'' + i + j} row={i} column={j} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixInput;
