import React, { useEffect } from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from './GameImage.module.css';

const GameImage = ({ image }) => {
  useEffect(() => {
    getDownloadURL(ref(storage, `game-images/${image}`)).then((url) => {
      const img = document.getElementById('gameImage');
      img.setAttribute('src', url);
      console.log('Getting image');
    });
  }, []);

  return (
    <img id="gameImage" className={styles.gameImage} alt="game image"></img>
  );
};

export default GameImage;
