import React from 'react';
import { Wizard } from '..';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.appContainer}>
    <div className={styles.wizardContainer}>
      <Wizard />
    </div>
  </div>
);

export default App;
