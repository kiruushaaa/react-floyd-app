import React, { useState } from 'react';
import s from './DimensionalInput.module.css';
import { getNormalValue } from '../../../utils/utils';

const DimensionalInput = props => {
  const [value, setValue] = useState(props.value);

  const btnClickHandler = (isIncr = false) => {
    let newValue = isIncr
      ? value === 15
        ? 15
        : value + 1
      : value === 0
      ? 0
      : value - 1;
    setValue(value => newValue);
    props.changeDimHandler(newValue);
  };

  const inputChangeHandler = event => {
    let newValue = getNormalValue(event.target.value, 15);
    setValue(value => newValue);
    props.changeDimHandler(newValue);
  };

  return (
    <div>
      <form className={s.form} action='#'>
        <label htmlFor='dimNumber'>Количество ребер:</label>
        <fieldset className={s.fieldset}>
          <button
            className={s.button}
            type='button'
            onClick={() => btnClickHandler()}>
            –
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
