import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from './GameLink.module.css';

const GameLink = ({ name, title }) => {
  const [image, setImage] = useState('');
  const getGameImage = async () => {
    const url = await getDownloadURL(ref(storage, `game-images/${name}.png`));
    setImage(url);
  };

  useEffect(() => {
    getGameImage();
    console.log('Getting image');
  }, []);

  return (
    <Link to="/teamfight-tactics" className={styles.gameLink}>
      <img id="gameLink1" src={image}></img>
      {title}
    </Link>
  );
};

export default GameLink;
