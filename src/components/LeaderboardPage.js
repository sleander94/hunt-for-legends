import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { Outlet } from 'react-router-dom';
import HomeButton from './HomeButton';
import LeaderboardLink from './LeaderboardLink';
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
      <div id="links" className={styles.links}>
        <LeaderboardLink name="teamfight-tactics" title="Teamfight Tactics" />
        <LeaderboardLink name="league-of-legends" title="League of Legends" />
        <LeaderboardLink name="wild-rift" title="Wild Rift" />
      </div>
      <Outlet />
    </div>
  );
};

export default LeaderboardPage;
