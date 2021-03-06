import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import styles from './LeaderboardLink.module.css';

const LeaderboardLink = ({ name, title }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const getGameImage = async () => {
      try {
        const url = await getDownloadURL(
          ref(storage, `game-images/${name}.png`)
        );
        setImage(url);
      } catch (e) {
        console.error(e);
      }
    };
    getGameImage();
  }, [name]);

  return (
    <div className={styles.leaderboardLink}>
      <Link to={`/leaderboards/${name}`} className={styles.leaderboard}>
        <div className={styles.title}>{title}</div>
        <img src={image} alt="game board"></img>
      </Link>
    </div>
  );
};

export default LeaderboardLink;
