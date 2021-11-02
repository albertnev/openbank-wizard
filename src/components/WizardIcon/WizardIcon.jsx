import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as icons from 'react-icons/fa';
import styles from './WizardIcon.module.scss';

const WizardIcon = ({ iconName, className, size, ...props }) => {
  const IconToRender = icons[iconName];
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <span
      data-testid={`wizard-icon-${iconName}`}
      className={cx(styles.iconContainer, className)}
      {...props}
    >
      <IconToRender size={size} />
    </span>
    /* eslint-enable react/jsx-props-no-spreading */
  );
};

WizardIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
};

WizardIcon.defaultProps = {
  className: undefined,
  size: undefined,
};

export default WizardIcon;
