import GameBoard from './components/GameBoard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      Hunt For Legends
      <GameBoard image="teamfight-tactics-wallpaper-1" />
    </div>
  );
}

export default App;
