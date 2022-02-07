import React from 'react';
import style from './Banner.module.scss';
import { Link } from 'react-router-dom';

const Banner = ({ onClickOk }) => {
  return (
    <div className={style.banner}>
      <h3>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!ПОДАРИТЕ ЕМУ СОБАКУ!</h3>
      <img src="./images/qrCode.png" alt="qrCode" width={126} height={126} />
      <p>Сканируйте QR-код или нажмите ОК</p>
      <Link to="/home">
        <button type="button" className={style.button} width={200} onClick={onClickOk}>
          ОК
        </button>
      </Link>
    </div>
  );
};
export default Banner;
