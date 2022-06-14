import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import GamePage from './components/GamePage';
import Leaderboard from './components/Leaderboard';
import LeaderboardPage from './components/LeaderboardPage';
import styles from './App.module.css';

function App() {
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
          <Route path="/leaderboards" element={<LeaderboardPage />}>
            <Route
              path="/leaderboards"
              element={<Navigate to="/leaderboards/teamfight-tactics" />}
            />
            <Route
              path="/leaderboards/teamfight-tactics"
              element={<Leaderboard name="teamfight-tactics" />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
