import React from 'react';
import style from './Numbers.module.scss';

export const Numbers = ({ title, onClickNumber }) => {
  return (
    <div className={style.numbers}>
      <button onClick={() => onClickNumber(title)}>{title}</button>
    </div>
  );
};
