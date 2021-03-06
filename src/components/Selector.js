import React from 'react';
import styles from './Selector.module.css';

const Selector = ({ chars, x, y, checkCoords, charURLs }) => {
  return (
    <div
      id="selector"
      className={styles.selector}
      style={{ top: y * 100 + '%', left: x * 100 + '%' }}
    >
      <div className={styles.char} onClick={() => checkCoords(1)}>
        <img src={charURLs[0]} alt="character 1 icon"></img>
        {chars['char1']['name']}
      </div>
      <div className={styles.char} onClick={() => checkCoords(2)}>
        <img src={charURLs[1]} alt="character 2 icon"></img>
        {chars['char2']['name']}
      </div>
      <div className={styles.char} onClick={() => checkCoords(3)}>
        <img src={charURLs[2]} alt="character 3 icon"></img>
        {chars['char3']['name']}
      </div>
    </div>
  );
};

export default Selector;
