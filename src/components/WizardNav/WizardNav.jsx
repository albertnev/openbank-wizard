import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { WizardIcon } from '../WizardIcon';
import styles from './WizardNav.module.scss';

const WizardNav = ({ numberOfSteps, currentStep }) => (
  <nav data-testid="wizard-nav-container" className={styles.wizardSteps}>
    <ul>
      {[...Array(numberOfSteps)].map((_, step) => {
        const actualStep = step + 1;
        const isActive = actualStep === currentStep;
        const isCompleted = actualStep + 1 <= currentStep;

        return (
          <React.Fragment key={`nav-block-${actualStep}`}>
            <li
              data-testid="wizard-nav-step"
              key={`nav-step-${actualStep}`}
              className={cx({
                [styles.activeStep]: isActive,
                [styles.completedStep]: isCompleted,
                [styles.navStep]: true,
              })}
            >
              {isCompleted ? <WizardIcon iconName="FaCheck" /> : actualStep}
            </li>
            {actualStep < numberOfSteps && (
              <li
                data-testid="wizard-nav-line"
                key={`nav-line-${actualStep}`}
                className={cx({
                  [styles.completedStep]: isCompleted,
                  [styles.navLine]: true,
                })}
              />
            )}
          </React.Fragment>
        );
      })}
    </ul>
  </nav>
);

WizardNav.propTypes = {
  numberOfSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number,
};

WizardNav.defaultProps = {
  currentStep: 1,
};

export default WizardNav;
