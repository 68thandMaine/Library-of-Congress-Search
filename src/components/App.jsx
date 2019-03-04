import React from 'react';
import Search from './Search';
import styles from './App.css';
import Carousel from './ResultCarousel';
import SavedImages from './SavedImages';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>Library of Congress Search</h1>
      <Search />
      <Carousel />
      <SavedImages />
    </div>
  );
}

export default App;
