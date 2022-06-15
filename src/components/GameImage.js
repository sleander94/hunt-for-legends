import React, { useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from './GameImage.module.css';

const GameImage = ({ name }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const getGameImage = async () => {
      try {
        const url = await getDownloadURL(ref(storage, `game-images/${name}`));
        setImage(url);
      } catch (e) {
        console.error(e);
      }
    };
    getGameImage();
  }, [name]);

  return (
    <img
      id="gameImage"
      className={styles.gameImage}
      alt="game background"
      src={image}
    ></img>
  );
};

export default GameImage;
