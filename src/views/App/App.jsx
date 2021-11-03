import React from 'react';

import { Wizard } from '../Wizard';
import styles from './App.module.scss';

const App = () => (
  <div data-testid="wizard-app" className={styles.appContainer}>
    <div className={styles.wizardContainer}>
      <Wizard />
    </div>
  </div>
);

export default App;
