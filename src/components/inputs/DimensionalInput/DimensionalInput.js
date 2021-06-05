import React from 'react';

const DimensionalInput = (props) => {
  const inputChangeHandler = (event) => {
    props.dispatch({
      type: 'CHANGE_DIM',
      payload: { dim: Number(event.target.value) },
    });
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
