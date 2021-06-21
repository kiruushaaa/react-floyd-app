import React from 'react';
import s from './Controls.module.css';
import ButtonContainer from './ButtonContainer';

const Controls = () => {
  return (
    <div className={s.container}>
      <ButtonContainer random={true} text='Заполнить случайным образом' />
      <ButtonContainer random={false} text='Показать результаты' />
    </div>
  );
};

export default Controls;
