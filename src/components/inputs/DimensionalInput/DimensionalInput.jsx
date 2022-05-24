import React from 'react';
import s from './DimensionalInput.module.css';
import { getNormalValue } from '../../../utils/utils';

const DimensionalInput = ({ value, changeDimHandler }) => {
  const btnClickHandler = (isIncr = false) => {
    let newValue = isIncr ? Math.min(value + 1, 10) : Math.max(value - 1, 3);

    changeDimHandler(newValue);
  };

  const inputChangeHandler = event => {
    let newValue = getNormalValue(event.target.value, 10);

    changeDimHandler(newValue);
  };

  return (
    <div>
      <form className={s.form} action='#'>
        <label htmlFor='dimNumber'>Количество вершин:</label>
        <fieldset className={s.fieldset}>
          <button
            className={s.button}
            type='button'
            onClick={() => btnClickHandler()}>
            -
          </button>
          <input
            className={s.input}
            type='number'
            id='dimNumber'
            min='0'
            max='15'
            value={value}
            onChange={inputChangeHandler}
          />
          <button
            className={s.button}
            type='button'
            onClick={() => btnClickHandler(true)}>
            +
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default DimensionalInput;
