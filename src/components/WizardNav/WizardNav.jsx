import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './WizardNav.module.scss';

const WizardNav = ({ currentStep }) => {
  const steps = ['1', '2', '3'];

  return (
    <nav className={styles.wizardSteps}>
      <ul>
        {steps.map((step) => (
          <li
            key={`nav-step-${step}`}
            className={cx({
              [styles.activeStep]: step === currentStep.toString(),
            })}
          >
            {step}
          </li>
        ))}
      </ul>
    </nav>
  );
};

WizardNav.propTypes = {
  currentStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WizardNav.defaultProps = {
  currentStep: '1',
};

export default WizardNav;
