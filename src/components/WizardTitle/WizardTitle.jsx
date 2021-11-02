import React from 'react';
import PropTypes from 'prop-types';
import styles from './WizardTitle.module.scss';

const WizardTitle = ({ title }) => (
  <h1 data-testid="wizard-title" className={styles.header}>
    {title}
  </h1>
);

WizardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WizardTitle;
