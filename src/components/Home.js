import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import GameLink from './GameLink';
import styles from './Home.module.css';

const Home = () => {
  const [icon, setIcon] = useState(null);
  const getIcon = async () => {
    const icon = await getDownloadURL(
      ref(storage, `character-images/icons/featherknight-icon.jpg`)
    );
    setIcon(icon);
  };

  useEffect(() => {
    getIcon();
    console.log('getting icon');
  }, []);
  return (
    <div id="home" className={styles.home}>
      <div className={styles.header}>
        <img
          src={icon}
          alt="featherknight icon"
          className={styles.headerIcon}
        ></img>
        <h1 className={styles.title}>Hunt for Legends</h1>
        <Link to="/leaderboards" className={styles.leaderboard}>
          Leaderboards
        </Link>
      </div>
      <div className={styles.gameLinksTitle}>
        Pick a level to start playing!{' '}
      </div>
      <div id="gameLinks" className={styles.gameLinks}>
        <GameLink name="teamfight-tactics" title="Teamfight Tactics" />
        <GameLink name="league-of-legends" title="League of Legends" />
        <GameLink name="wild-rift" title="Wild Rift" />
      </div>
    </div>
  );
};

export default Home;
