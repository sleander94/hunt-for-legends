import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import GameBoard from './GameBoard';
import Characters from './Characters';

function GamePage({ image }) {
  const [selector, setSelector] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [chars, setChars] = useState(null);
  const [charURLs, setCharURLs] = useState([]);
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

  const getCharURLs = async () => {
    const image1 = await getDownloadURL(
      ref(storage, `character-images/${image}/${[chars[`char1`]['name']]}.jpg`)
    );
    const image2 = await getDownloadURL(
      ref(storage, `character-images/${image}/${[chars[`char2`]['name']]}.jpg`)
    );
    const image3 = await getDownloadURL(
      ref(storage, `character-images/${image}/${[chars[`char3`]['name']]}.jpg`)
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
        console.log(true);
        setFound([...found, chars['char' + num]['name']]);
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
    <div className="gamePage">
      {chars && <Characters charURLs={charURLs} chars={chars}></Characters>}
      <GameBoard
        image="teamfight-tactics-wallpaper-1"
        selector={selector}
        x={x}
        y={y}
        chars={chars}
        charURLs={charURLs}
        found={found}
        checkCoords={checkCoords}
        displaySelector={displaySelector}
      />
    </div>
  );
}

export default GamePage;
