import React from 'react';
import styles from './Selector.module.css';

const Selector = ({ chars, x, y }) => {
  const checkCoords = (char) => {
    char = chars[char];
    if (
      x < char['xmax'] &&
      x > char['xmin'] &&
      y < char['ymax'] &&
      y > char['ymin']
    ) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  return (
    <div
      id="selector"
      className={styles.selector}
      style={{ top: y * 100 + '%', left: x * 100 + '%' }}
    >
      <div className="char" onClick={() => checkCoords('char1')}>
        {chars['char1']['name']}
      </div>
      <div className="char" onClick={() => checkCoords('char2')}>
        {chars['char2']['name']}
      </div>
      <div className="char" onClick={() => checkCoords('char3')}>
        {chars['char3']['name']}
      </div>
    </div>
  );
};

export default Selector;
