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
  const [chars, setChars] = useState(null);
  const [found, setFound] = useState([]);

  const getCharInfo = async () => {
    const response = await getDoc(doc(db, `game-images/${image}`));
    setChars(response.data());
  };

  useEffect(() => {
    if (!chars) {
      getCharInfo();
      console.log('Getting chars');
    }
  }, [chars]);

  const checkCoords = (num) => {
    const char = chars['char' + num];
    if (!found.includes(num)) {
      if (
        x < char['xmax'] &&
        x > char['xmin'] &&
        y < char['ymax'] &&
        y > char['ymin']
      ) {
        console.log(true);
        setFound([...found, num]);
        console.log(found);
      } else {
        console.log(false);
      }
    }
  };

  const displaySelector = (e) => {
    if (chars) {
      let canvas = document.getElementById('gameGrid').getBoundingClientRect();
      let x = (e.clientX - canvas.left) / canvas.width;
      let y = (e.clientY - canvas.top) / canvas.height;
      setX(x.toFixed(2));
      setY(y.toFixed(2));
      setSelector(!selector);
    }
  };

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
        ></Selector>
      )}
    </div>
  );
};

export default GameBoard;
