import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
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
  }, [icon]);
  return (
    <div id="home" className={styles.home}>
      <div className={styles.header}>
        <img
          src={icon}
          alt="featherknight icon"
          className={styles.headerIcon}
        ></img>
        <h1 className={styles.title}>Hunt for Legends</h1>
      </div>
      <Link to="/teamfight-tactics-1">Teamfight Tactics</Link>
      <Link to="/teamfight-tactics-1-leaderboard">Leaderboard</Link>
    </div>
  );
};

export default Home;
