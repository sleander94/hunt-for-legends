import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { storage } from './firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import Home from './components/Home';
import GamePage from './components/GamePage';
import Leaderboard from './components/Leaderboard';
import LeaderboardPage from './components/LeaderboardPage';
import styles from './App.module.css';

function App() {
  const [icon, setIcon] = useState(null);

  const getIcon = async () => {
    const icon = await getDownloadURL(
      ref(storage, `character-images/icons/iconmonstr-github-1.svg`)
    );
    setIcon(icon);
  };

  useEffect(() => {
    getIcon();
  }, []);
  return (
    <div className={styles.App}>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/teamfight-tactics"
            element={<GamePage name="teamfight-tactics" />}
          />
          <Route
            path="/league-of-legends"
            element={<GamePage name="league-of-legends" />}
          />
          <Route path="/wild-rift" element={<GamePage name="wild-rift" />} />
          <Route path="/leaderboards" element={<LeaderboardPage />}>
            <Route
              path="/leaderboards"
              element={<Navigate to="/leaderboards/teamfight-tactics" />}
            />
            <Route
              path="/leaderboards/league-of-legends"
              element={
                <Leaderboard
                  name="league-of-legends"
                  title="League of Legends"
                  key={1}
                />
              }
            />
            <Route
              path="/leaderboards/teamfight-tactics"
              element={
                <Leaderboard
                  name="teamfight-tactics"
                  title="Teamfight Tactics"
                  key={2}
                />
              }
            />
            <Route
              path="/leaderboards/wild-rift"
              element={
                <Leaderboard name="wild-rift" title="Wild Rift" key={3} />
              }
            />
          </Route>
        </Routes>
      </Router>
      <div className={styles.footer}>
        <div className={styles.footerDivs}>
          <div>sleander94</div>
          <div>
            <a href="https://github.com/sleander94">
              <img src={icon} alt="github logo"></img>
            </a>
          </div>
          <div>2022</div>
        </div>
      </div>
    </div>
  );
}

export default App;
