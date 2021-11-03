import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { WizardIcon } from '../WizardIcon';
import styles from './WizardSecurityList.module.scss';

const WizardSecurityList = ({ securityConditions }) => (
  <ul data-testid="wizard-security-list-container" className={styles.hintList}>
    {securityConditions.map(({ succeeded, hint }) => (
      <li
        data-testid="wizard-security-list-hint"
        key={`hint-${hint.replace(' ', '')}`}
        className={cx({
          [styles.hint]: true,
          [styles.hintSucceeded]: succeeded,
          [styles.hintFailed]: !succeeded,
        })}
      >
        <WizardIcon iconName={succeeded ? 'FaCheck' : 'FaTimes'} size={10} />{' '}
        <span className={styles.hintText}>{hint}</span>
      </li>
    ))}
  </ul>
);

WizardSecurityList.propTypes = {
  securityConditions: PropTypes.arrayOf(
    PropTypes.shape({
      succeeded: PropTypes.bool,
      hint: PropTypes.string,
    })
  ).isRequired,
};

export default WizardSecurityList;
