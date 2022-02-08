import React from 'react';
import styles from '../pages/Home.module.scss';

export const ConfirmButton = ({ onClickOrder }) => {
  return (
    <div className={styles.confirm}>
      <button className={styles.buttonConfirm} disabled={false} onClick={onClickOrder}>
        ПОДТВЕРДИТЬ НОМЕР
      </button>
    </div>
  );
};
