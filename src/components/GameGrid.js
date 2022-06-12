import React from 'react';
import styles from './GameGrid.module.css';

const GameGrid = ({ displaySelector }) => {
  return (
    <div
      id="gameGrid"
      className={styles.gameGrid}
      onClick={(e) => displaySelector(e)}
    ></div>
  );
};

export default GameGrid;
