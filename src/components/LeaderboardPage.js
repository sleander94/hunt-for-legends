import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { Outlet, Link } from 'react-router-dom';
import HomeButton from './HomeButton';
import styles from './LeaderboardPage.module.css';

const LeaderboardPage = () => {
  const [icon, setIcon] = useState(null);

  const getIcon = async () => {
    const icon = await getDownloadURL(
      ref(storage, `character-images/icons/spatula.jpg`)
    );
    setIcon(icon);
  };

  useEffect(() => {
    getIcon();
    console.log('getting icon');
  }, []);
  return (
    <div id="leaderboardPage" className={styles.leaderboardPage}>
      <div className={styles.header}>
        <img src={icon} alt="spatula icon" className={styles.headerIcon}></img>
        <h1 className={styles.title}>Leaderboards</h1>
        <HomeButton />
      </div>
      <div className={styles.links}>
        <Link to="/leaderboards/teamfight-tactics">Teamfight Tactics</Link>
        <Link to="/leaderboards/teamfight-tactics">League of Legends</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default LeaderboardPage;
