import React from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from './GameImage.module.css';

const GameImage = ({ image }) => {
  getDownloadURL(ref(storage, `game-images/${image}`)).then((url) => {
    const img = document.getElementById('gameImage');
    img.setAttribute('src', url);
  });
  return (
    <img id="gameImage" className={styles.gameImage} alt="game image"></img>
  );
};

export default GameImage;
