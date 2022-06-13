import React from 'react';
import styles from './Selector.module.css';

const Selector = ({ chars, x, y, checkCoords }) => {
  return (
    <div
      id="selector"
      className={styles.selector}
      style={{ top: y * 100 + '%', left: x * 100 + '%' }}
    >
      <div className="char" onClick={() => checkCoords(1)}>
        {chars['char1']['name']}
      </div>
      <div className="char" onClick={() => checkCoords(2)}>
        {chars['char2']['name']}
      </div>
      <div className="char" onClick={() => checkCoords(3)}>
        {chars['char3']['name']}
      </div>
    </div>
  );
};

export default Selector;
