import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { query, orderBy, limit, collection, getDocs } from 'firebase/firestore';
import styles from './Leaderboard.module.css';

const Leaderboard = ({ name, title }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      try {
        const queryScores = query(
          collection(db, name),
          orderBy('time'),
          limit(50)
        );
        const scoresList = await getDocs(queryScores);
        let newScores = [];
        scoresList.forEach((score) => {
          newScores.push(score.data());
        });
        setScores(newScores);
      } catch (e) {
        console.error(e);
      }
    };
    getScores();
  }, [name]);

  return (
    <div id="leaderboard" className={styles.leaderboard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.header}>
        <div className={styles.rank}>Rank</div>
        <div className={styles.name}>Name</div>
        <div className={styles.time}>Time (s)</div>
      </div>
      {scores.map((score) => {
        return (
          <div key={scores.indexOf(score)} className={styles.score}>
            <div className={styles.scoreRank}>{scores.indexOf(score) + 1}</div>
            <div className={styles.scoreName}>{score.name}</div>
            <div className={styles.scoreTime}>{score.time}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;
