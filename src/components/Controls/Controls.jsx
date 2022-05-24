import React from 'react';
import s from './Controls.module.css';
import ButtonContainer from './ButtonContainer';

const Controls = () => {
  return (
    <div className={s.container}>
      <ButtonContainer text='Заполнить случайным образом' random />
      <ButtonContainer text='Заполнить неотрицательными числами' random isPositive />
      <ButtonContainer text='Показать результат' />
    </div>
  );
};

export default Controls;
