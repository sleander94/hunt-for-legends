import React, { useEffect } from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from './GameImage.module.css';

const GameImage = ({ image }) => {
  const getGameImage = async () => {
    const url = await getDownloadURL(ref(storage, `game-images/${image}`));
    const img = document.getElementById('gameImage');
    img.setAttribute('src', url);
    console.log('Getting image');
  };

  useEffect(() => {
    getGameImage();
  }, []);

  return (
    <img id="gameImage" className={styles.gameImage} alt="game image"></img>
  );
};

export default GameImage;
