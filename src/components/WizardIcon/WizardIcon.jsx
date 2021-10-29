import React from 'react';
import PropTypes from 'prop-types';
import * as icons from 'react-icons/fa';
import styles from './WizardIcon.module.scss';

const WizardIcon = ({ iconName, ...props }) => {
  const IconToRender = icons[iconName];
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <span className={styles.iconContainer} {...props}>
      <IconToRender />
    </span>
  );
};

WizardIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default WizardIcon;
