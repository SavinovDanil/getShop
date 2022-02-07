import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../components/input/Input';
import { Numbers } from '../components/numbers/Numbers';

import styles from './Home.module.scss';

export const Home = () => {
  let str = '+7';
  const [valueInput, setValueInput] = React.useState(str);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть', 0];

  const onClickNumber = (title) => {
    if (title === 'Стереть') {
      const changevalue = valueInput.slice(0, -1);
      setValueInput(changevalue);
      console.log(changevalue);
    } else {
      setValueInput(valueInput + title);
      console.log(valueInput);
    }
  };

  return (
    <>
      <Link to="/">
        <button className={styles.closeButton} type="button">
          Закрыть
        </button>
      </Link>
      <div className={styles.content}>
        <Input title={valueInput} />

        <div className={styles.buttonsBlock}>
          {arr.map((item, index) => (
            <Numbers
              key={index}
              title={item}
              onClickNumber={onClickNumber}
              onDelete={() => {
                console.log(1);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
