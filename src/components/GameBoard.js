import React, { useState } from 'react';
import GameImage from './GameImage';
import GameGrid from './GameGrid';
import Selector from './Selector';
import styles from './GameBoard.module.css';

const GameBoard = ({
  image,
  selector,
  x,
  y,
  chars,
  charURLs,
  checkCoords,
  displaySelector,
}) => {
  return (
    <div id="gameBoard" className={styles.gameBoard}>
      <GameImage image={image + '.png'}></GameImage>
      <GameGrid displaySelector={displaySelector}></GameGrid>
      {selector && (
        <Selector
          chars={chars}
          x={x}
          y={y}
          checkCoords={checkCoords}
          charURLs={charURLs}
        ></Selector>
      )}
    </div>
  );
};

export default GameBoard;
