import GameBoard from './components/GameBoard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      Hunt For Legends
      <GameBoard />
    </div>
  );
}

export default App;
