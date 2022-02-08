import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../components/input/Input';
import { Numbers } from '../components/numbers/Numbers';
import { ConfirmButton } from '../components/CongirmButton';
import { DisabledButton } from '../components/DisabledButton';

import styles from './Home.module.scss';

export const Home = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Стереть', 0];

  const [valueInput, setValueInput] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const [isInfo, setIsInfo] = React.useState(false);

  const onClickNumber = (title) => {
    if (title === 'Стереть') {
      setValueInput(valueInput.slice(0, -1));
    } else {
      setValueInput(valueInput + title);
    }
  };

  return (
    <div className={styles.homePage}>
      <Link to="/">
        {isInfo ? (
          <button className={styles.closeButton} type="button">
            <img src="./images/over.png" alt="" />
          </button>
        ) : (
          <button className={styles.closeButton} type="button">
            <img src="./images/out.png" alt="" />
          </button>
        )}
      </Link>
      <div className={styles.qrCode}>
        <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img src="./images/qrCode.png" alt="qrCode" width={110} height={110} />
      </div>
      {isInfo ? (
        <div className={styles.info}>
          <h2>
            ЗАЯВКА<br></br>ПРИНЯТА
          </h2>
          <p>Держите телефон под рукой.</p>
          <p>Скоро с Вами свяжется наш менеджер.</p>
        </div>
      ) : (
        <div className={styles.content}>
          <Input title={valueInput} />

          <div className={styles.buttonsBlock}>
            {arr.map((item, index) => (
              <Numbers key={index} title={item} onClickNumber={onClickNumber} />
            ))}
          </div>
          <div className={styles.check}>
            <img
              src={isChecked ? './images/consent.png' : './images/dissent.png'}
              alt=""
              width={40}
              height={40}
              onClick={() => setIsChecked(!isChecked)}
            />
            <p>Согласие на обработку персональных данных</p>
          </div>
          {isChecked && valueInput.length === 10 ? (
            <ConfirmButton
              onClickOrder={() => setIsInfo(true)}
              isChecked={isChecked}
              valueLength={valueInput.length}
            />
          ) : (
            <DisabledButton isChecked={isChecked} valueLength={valueInput.length} />
          )}
          {/* <ConfirmButton isChecked={isChecked} valueLength={valueInput.length} /> */}
          {/* <DisabledButton isChecked={isChecked} valueLength={valueInput.length} /> */}
        </div>
      )}
    </div>
  );
};
