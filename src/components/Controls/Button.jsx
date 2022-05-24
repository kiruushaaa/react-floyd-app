import React from 'react';
import s from './Button.module.css';

const Button = ({ text, random = false, isPositive = false, fillClickHandler, runClickHandler }) => {
  const onClick = random
    ? () => fillClickHandler(isPositive)
    : runClickHandler;

  return (
    <button
      className={s.button}
      type='button'
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
