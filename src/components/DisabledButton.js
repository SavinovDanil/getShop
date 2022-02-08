import React from 'react';
import styles from '../pages/Home.module.scss';

export const DisabledButton = () => {
  return (
    <div className={styles.confirm}>
      <button className={styles.buttonDisabled} disabled={true}>
        ПОДТВЕРДИТЬ НОМЕР
      </button>
    </div>
  );
};
