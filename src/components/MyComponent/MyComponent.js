import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyComponent.module.css';
import Bmw from './BMWW.webp';
import heart from './heart.png';
import truck from './truck.png';

const MyComponent = () => (
  <div className={styles.card}>
    <div className={styles.imageCont}>
      <img src={Bmw} className={styles.image}></img>
      <div className={styles.truckCont}>
      <img className={styles.truckImg} src={truck}></img>
      </div>
    </div>
    <div className={styles.details}>
      <div className={styles.title}>
        <h2>Обвес М-Performance тюнинг BMW X5 F15</h2>
        <p className={styles.text}>Спойлер Диффузор Пороги Губа</p>
        <div className={styles.contPrice}><img src={truck} className={styles.truck}></img>
        <h3>11 343 грн</h3></div>
        <p className={styles.status}>Новe</p>
      </div>
      <div className={styles.address}>
        <p>Київ, Печерський - 06 червня 2024 р.</p>
      </div>
      <div className={styles.cont}>
      <img src={heart} className={styles.heart}></img>
    </div>
    </div>
  </div>
);

MyComponent.propTypes = {};

MyComponent.defaultProps = {};

export default MyComponent;
