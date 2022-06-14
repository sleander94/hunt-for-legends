import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home';
import GamePage from './components/GamePage';
import Leaderboard from './components/Leaderboard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/teamfight-tactics-1"
            element={<GamePage name="teamfight-tactics-wallpaper-1" />}
          />
          <Route
            path="/teamfight-tactics-1-leaderboard"
            element={<Leaderboard name="teamfight-tactics-wallpaper-1" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
