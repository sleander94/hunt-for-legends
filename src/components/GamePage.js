import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import GameBoard from './GameBoard';
import Characters from './Characters';
import ScoreUploader from './ScoreUploader';
import HomeButton from './HomeButton';
import charStyles from './Characters.module.css';
import styles from './GamePage.module.css';

function GamePage({ name }) {
  const [selector, setSelector] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [chars, setChars] = useState(null);
  const [charURLs, setCharURLs] = useState([]);
  const [found, setFound] = useState([]);
  const [timer, setTimer] = useState(0);

  // Start a timer on page load
  useEffect(() => {
    if (found.length < 3) {
      const count = setInterval(
        () => setTimer((timer * 10 + 0.1 * 10) / 10),
        100
      );
      return () => clearInterval(count);
    } else {
      console.log('game over');
    }
  }, [timer]);

  const getCharInfo = async () => {
    const response = await getDoc(doc(db, `game-images/${name}`));
    setChars(response.data());
  };

  useEffect(() => {
    if (!chars) {
      getCharInfo();
      console.log('Getting chars');
    }
  }, [chars]);

  const getCharURLs = async () => {
    const image1 = await getDownloadURL(
      ref(storage, `character-images/${name}/${[chars[`char1`]['name']]}.jpg`)
    );
    const image2 = await getDownloadURL(
      ref(storage, `character-images/${name}/${[chars[`char2`]['name']]}.jpg`)
    );
    const image3 = await getDownloadURL(
      ref(storage, `character-images/${name}/${[chars[`char3`]['name']]}.jpg`)
    );
    const images = await Promise.all([image1, image2, image3]);
    setCharURLs(images);
  };

  useEffect(() => {
    if (chars) {
      getCharURLs();
      console.log('Getting char images');
    }
  }, [chars]);

  const checkCoords = (num) => {
    const char = chars['char' + num];
    if (!found.includes(chars['char' + num]['name'])) {
      if (
        x < char['xmax'] &&
        x > char['xmin'] &&
        y < char['ymax'] &&
        y > char['ymin']
      ) {
        setFound([...found, chars['char' + num]['name']]);
        const element = document.querySelector(
          `[name=${chars['char' + num]['name']}]`
        );
        element.classList.add(charStyles.found);
        setSelector(!selector);
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
    <div className="gamePage">
      <div className={styles.header}>
        {chars && (
          <Characters
            charURLs={charURLs}
            chars={chars}
            found={found}
          ></Characters>
        )}
        <HomeButton />
      </div>
      <GameBoard
        name={name}
        selector={selector}
        x={x}
        y={y}
        chars={chars}
        charURLs={charURLs}
        found={found}
        checkCoords={checkCoords}
        displaySelector={displaySelector}
      />
      {found.length === 3 && (
        <ScoreUploader timer={timer} name={name}></ScoreUploader>
      )}
    </div>
  );
}

export default GamePage;
