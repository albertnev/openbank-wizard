import React from 'react';
import { WizardIcon } from '../WizardIcon';
import styles from './WizardLoader.module.scss';

const WizardLoader = () => (
  <div data-testid="wizard-loader" className={styles.loaderContainer}>
    <WizardIcon className={styles.loader} iconName="FaSpinner" size={100} />
  </div>
);

export default WizardLoader;
