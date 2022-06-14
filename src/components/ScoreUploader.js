import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import styles from './ScoreUploader.module.css';

const ScoreUploader = ({ timer, name }) => {
  const uploadScore = async () => {
    const playerName = document.getElementById('playerName').value;
    await addDoc(collection(db, name), {
      name: playerName,
      time: timer,
    });
  };

  return (
    <div id="scoreUploader" className={styles.scoreUploader}>
      <div className={styles.time}>
        You finished the hunt in {timer} seconds!
      </div>
      <div className={styles.instructions}>
        Enter your name to add your score to the leaderboard.
      </div>
      <input id="playerName"></input>
      <Link to="/home" className={styles.cancel}>
        Cancel
      </Link>
      <Link
        to="/leaderboards"
        onClick={() => uploadScore()}
        className={styles.submit}
      >
        Submit Score
      </Link>
    </div>
  );
};

export default ScoreUploader;
