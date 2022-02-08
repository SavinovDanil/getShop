import React from 'react';
import InputMask from 'react-input-mask';

import style from './Input.module.scss';

export const Input = ({ title }) => {
  // console.log(title);

  return (
    <div className={style.inputBlock}>
      <h1>Введите ваш номер мобильного телефона</h1>
      <InputMask
        className={style.input}
        mask="+7(999)-999-99-99"
        alwaysShowMask={true}
        value={title}
        // beforeMaskedStateChange={beforeMaskedStateChange}
      ></InputMask>
      <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
    </div>
  );
};
