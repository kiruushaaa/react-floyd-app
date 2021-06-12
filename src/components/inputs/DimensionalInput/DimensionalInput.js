import React from 'react';
import { changeDimActionCreator } from '../../../redux/app-reducer';

const DimensionalInput = (props) => {
  const inputChangeHandler = (event) => {
    let value = Number(event.target.value);
    props.dispatch(changeDimActionCreator(value));
  };

  return (
    <div>
      <label className='dim-label' htmlFor='dimNumber'>
        Количество ребер:
      </label>
      <input
        className='dim-number'
        type='number'
        id='dimNumber'
        min='2'
        max='10'
        value={props.state.dim}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default DimensionalInput;
