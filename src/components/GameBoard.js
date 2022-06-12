import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import GameImage from './GameImage';
import GameGrid from './GameGrid';
import Selector from './Selector';
import styles from './GameBoard.module.css';

const GameBoard = ({ image }) => {
  const [selector, setSelector] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [chars, setChars] = useState({});

  const getCharInfo = async () => {
    const response = await getDoc(doc(db, `game-images/${image}`));
    setChars(response.data());
  };

  useEffect(() => {
    getCharInfo();
  }, [chars]);

  const displaySelector = (e) => {
    let canvas = document.getElementById('gameGrid').getBoundingClientRect();
    let x = (e.clientX - canvas.left) / canvas.width;
    let y = (e.clientY - canvas.top) / canvas.height;
    setX(x.toFixed(2));
    setY(y.toFixed(2));
    setSelector(!selector);
  };

  return (
    <div id="gameBoard" className={styles.gameBoard}>
      <GameImage image={image + '.png'}></GameImage>
      <GameGrid displaySelector={displaySelector}></GameGrid>
      {selector && <Selector chars={chars} x={x} y={y}></Selector>}
    </div>
  );
};

export default GameBoard;
