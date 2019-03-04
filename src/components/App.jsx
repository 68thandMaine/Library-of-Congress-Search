import React from 'react';
import Search from './Search';
import styles from './App.css';
import Carousel from './ResultCarousel';

function App() {
  return (
    <div className={styles.app}>
      <h1>Library of Congress Search</h1>
      <Search />
      <Carousel />
    </div>
  );
}

export default App;
