import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeButton.module.css';

const HomeButton = () => {
  return (
    <Link to="/home" className={styles.homeButton}>
      Home
    </Link>
  );
};

export default HomeButton;
