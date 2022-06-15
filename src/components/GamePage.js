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

  // Start a timer on page load, stop when all chars are found
  useEffect(() => {
    if (found.length < 3) {
      const count = setInterval(
        () => setTimer((timer * 10 + 0.1 * 10) / 10),
        100
      );
      return () => clearInterval(count);
    }
    // Disabling dependency error due to not passing found to useEffect
    // found is already checked every .1s due to timer updating
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  useEffect(() => {
    if (!chars) {
      const getCharInfo = async () => {
        try {
          const response = await getDoc(doc(db, `game-images/${name}`));
          setChars(response.data());
        } catch (e) {
          console.error(e);
        }
      };
      getCharInfo();
    }
  }, [chars, name]);

  useEffect(() => {
    if (chars) {
      const getCharURLs = async () => {
        try {
          const image1 = await getDownloadURL(
            ref(
              storage,
              `character-images/${name}/${[chars[`char1`]['name']]}.jpg`
            )
          );
          const image2 = await getDownloadURL(
            ref(
              storage,
              `character-images/${name}/${[chars[`char2`]['name']]}.jpg`
            )
          );
          const image3 = await getDownloadURL(
            ref(
              storage,
              `character-images/${name}/${[chars[`char3`]['name']]}.jpg`
            )
          );
          const images = await Promise.all([image1, image2, image3]);
          setCharURLs(images);
        } catch (e) {
          console.error(e);
        }
      };
      getCharURLs();
    }
  }, [chars, name]);

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
    <div className={styles.gamePage}>
      <div className={styles.header}>
        <div>
          {chars && (
            <Characters
              charURLs={charURLs}
              chars={chars}
              found={found}
            ></Characters>
          )}
        </div>
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
