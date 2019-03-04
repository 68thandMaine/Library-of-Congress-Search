import React from 'react';
import Search from './Search';
import styles from './App.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>Library of Congress Search</h1>
      <Search />
      <img src='https://www.loc.gov/pictures/cdn/service/pnp/habshaer/nj/nj1000/nj1041/photos/108657pr.jpg'/>
    </div>
  );
}

export default App;
