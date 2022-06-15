import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from './GameLink.module.css';

const GameLink = ({ name, title }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const getImage = async () => {
      try {
        const url = await getDownloadURL(
          ref(storage, `game-images/${name}.png`)
        );
        setImage(url);
      } catch (e) {
        console.error(e);
      }
    };
    getImage();
  }, [name]);

  return (
    <div className={styles.gameLink}>
      <Link to={`/${name}`}>
        {title}
        <img src={image} alt="game background"></img>
      </Link>
    </div>
  );
};

export default GameLink;
