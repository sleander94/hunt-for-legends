import React from 'react';
import styles from './Selector.module.css';

const Selector = ({ chars, x, y }) => {
  return (
    <div
      id="selector"
      className={styles.selector}
      style={{ top: y * 100 + '%', left: x * 100 + '%' }}
    >
      <div className="char" onClick={() => console.log(chars['char1']['name'])}>
        {chars['char1']['name']}
      </div>
      <div className="char" onClick={() => console.log(chars['char2']['name'])}>
        {chars['char2']['name']}
      </div>
      <div className="char" onClick={() => console.log(chars['char3']['name'])}>
        {chars['char3']['name']}
      </div>
    </div>
  );
};

export default Selector;
