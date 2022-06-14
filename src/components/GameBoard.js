import React from 'react';
import GameImage from './GameImage';
import GameGrid from './GameGrid';
import Selector from './Selector';
import styles from './GameBoard.module.css';

const GameBoard = ({
  name,
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
      <GameImage name={name + '.png'}></GameImage>
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
