import React from 'react';
import styles from './GameGrid.module.css';

const GameGrid = ({ displaySelector }) => {
  return (
    <canvas
      id="gameGrid"
      className={styles.gameGrid}
      onClick={(e) => displaySelector(e)}
    ></canvas>
  );
};

export default GameGrid;
