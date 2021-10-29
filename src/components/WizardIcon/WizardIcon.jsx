import React from 'react';
import PropTypes from 'prop-types';
import * as icons from 'react-icons/fa';
import styles from './WizardIcon.module.scss';

const WizardIcon = ({ iconName }) => {
  const IconToRender = icons[iconName];
  return (
    <span className={styles.iconContainer}>
      <IconToRender />
    </span>
  );
};

WizardIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default WizardIcon;
