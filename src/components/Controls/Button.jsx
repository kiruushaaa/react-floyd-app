import React from 'react';
import s from './Button.module.css';

const Button = props => {
  return (
    <button
      className={s.button}
      type='button'
      onClick={props.random ? props.fillClickHandler : props.runClickHandler}>
      {props.text}
    </button>
  );
};

export default Button;
