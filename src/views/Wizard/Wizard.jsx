import React from 'react';
import { WizardNav } from '../../components';
import styles from './Wizard.scss';

const Wizard = () => {
  const something = 'test text';

  return (
    <div className={styles.something}>
      <WizardNav currentStep="2" />
      <span>{something}</span>
    </div>
  );
};

export default Wizard;
