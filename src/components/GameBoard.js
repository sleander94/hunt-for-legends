import React from 'react';
import GameImage from './GameImage';
import GameGrid from './GameGrid';
import styles from './GameBoard.module.css';

const GameBoard = () => {
  return (
    <div id="gameBoard" className={styles.gameBoard}>
      <GameImage image="teamfight-tactics-wallpaper-1.png"></GameImage>
      <GameGrid></GameGrid>
    </div>
  );
};

export default GameBoard;
