import React from 'react';
import styles from './Selector.module.css';

const Selector = ({ chars, x, y }) => {
  return (
    <div
      id="selector"
      className={styles.selector}
      style={{ top: y * 100 + '%', left: x * 100 + '%' }}
    >
      <div className="char" onClick={() => console.log(chars[0].name)}>
        {chars[0].name}
      </div>
      <div className="char" onClick={() => console.log(chars[1].name)}>
        {chars[1].name}
      </div>
      <div className="char" onClick={() => console.log(chars[2].name)}>
        {chars[2].name}
      </div>
    </div>
  );
};

export default Selector;
