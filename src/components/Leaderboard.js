import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { query, orderBy, limit, collection, getDocs } from 'firebase/firestore';

const Leaderboard = ({ name }) => {
  const [scores, setScores] = useState([]);
  const getScores = async () => {
    const queryScores = query(collection(db, name), orderBy('time'), limit(50));
    const scoresList = await getDocs(queryScores);
    let newScores = [];
    scoresList.forEach((score) => {
      newScores.push(score.data());
    });
    setScores(newScores);
  };

  useEffect(() => {
    if (scores.length === 0) {
      getScores();
    }
    if (scores.length !== 0) {
      console.log(scores);
    }
  }, [scores]);

  return (
    <div id="leaderboard">
      {scores.map(({ name, time }) => {
        return (
          <div key={time}>
            {name} took {time} seconds!
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;
