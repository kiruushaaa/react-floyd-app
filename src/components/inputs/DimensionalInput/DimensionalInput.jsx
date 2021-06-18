import React from 'react';

const DimensionalInput = props => {
  return (
    <div>
      <label>
        Количество ребер:
        <input
          className='dim-number'
          type='number'
          id='dimNumber'
          min='2'
          max='10'
          value={props.value}
          onChange={props.changeDimHandler}
        />
      </label>
    </div>
  );
};

export default DimensionalInput;
