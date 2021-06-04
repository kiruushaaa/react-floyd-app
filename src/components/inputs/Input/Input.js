import React from 'react';

const Input = (props) => {
  const inputChangeHandler = (event, params) => {
    props.dispatch({
      type: 'CHANGE_MATRIX',
      payload: {
        value: event.target.value,
        ...params,
      },
    });
  };

  return (
    <React.Fragment key={'' + props.row + props.column}>
      <input
        type='text'
        value={props.value}
        disabled={props.row === props.column}
        onChange={(event) =>
          inputChangeHandler(event, { row: props.row, column: props.column })
        }
      />
      {props.column + 1 === props.dim && <br />}
    </React.Fragment>
  );
};

export default Input;
