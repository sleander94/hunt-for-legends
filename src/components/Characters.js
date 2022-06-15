import React from 'react';
import styles from './Characters.module.css';

const Characters = ({ chars, charURLs }) => {
  return (
    <div className={styles.characterContainer}>
      <div className={styles.char} name={chars['char1']['name']}>
        <img src={charURLs[0]} alt="character icon" className={styles.image} />
        <div className={styles.charName}>{chars['char1']['name']}</div>
      </div>
      <div className={styles.char} name={chars['char2']['name']}>
        <img src={charURLs[1]} alt="character icon" className={styles.image} />
        <div className={styles.charName}>{chars['char2']['name']}</div>
      </div>
      <div className={styles.char} name={chars['char3']['name']}>
        <img src={charURLs[2]} alt="character icon" className={styles.image} />
        <div className={styles.charName}>{chars['char3']['name']}</div>
      </div>
    </div>
  );
};

export default Characters;
