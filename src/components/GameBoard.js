import React, { useState } from 'react';
import GameImage from './GameImage';
import GameGrid from './GameGrid';
import Selector from './Selector';
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const [selector, setSelector] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const chars = [
    { name: 'Pengu' },
    { name: 'Molediver' },
    { name: 'Hauntling' },
  ];

  const displaySelector = (e) => {
    let canvas = document.getElementById('gameGrid').getBoundingClientRect();
    let x = e.clientX - canvas.left;
    let y = e.clientY - canvas.top;
    setX((x / canvas.width).toFixed(2));
    setY((y / canvas.height).toFixed(2));
    setSelector(!selector);
  };

  return (
    <div id="gameBoard" className={styles.gameBoard}>
      <GameImage image="teamfight-tactics-wallpaper-1.png"></GameImage>
      <GameGrid displaySelector={displaySelector}></GameGrid>
      {selector && <Selector chars={chars} x={x} y={y}></Selector>}
    </div>
  );
};

export default GameBoard;
