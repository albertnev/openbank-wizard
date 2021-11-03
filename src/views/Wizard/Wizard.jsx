import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { WizardNav, WizardLoader } from '../../components';
import { submitForm } from '../../services/api';
import { useFetchData } from '../../hooks';
import { Feedback } from '../Feedback';
import { Form } from '../Form';
import { ProductInformation } from '../ProductInformation';
import styles from './Wizard.module.scss';

const Wizard = ({ currentStep }) => {
  const numberOfSteps = 3;
  const [step, setStep] = useState(currentStep);

  const increaseStep = () => {
    if (step + 1 <= numberOfSteps) setStep((current) => current + 1);
  };
  const decreaseStep = () => {
    if (step - 1 > 0) setStep((current) => current - 1);
  };

  const { isLoading, hasError, sendData } = useFetchData();
  const sendPasswordData = async ({
    password,
    repeatedPassword,
    optionalHint,
  }) => {
    await sendData(() => submitForm(password, repeatedPassword, optionalHint));
    increaseStep();
  };

  return (
    <div data-testid="wizard-container" className={styles.wizardContainer}>
      {step < numberOfSteps && (
        <div className={styles.wizardNavContainer}>
          <WizardNav numberOfSteps={numberOfSteps} currentStep={step} />
        </div>
      )}
      <div className={styles.pageContent}>
        {isLoading ? (
          <WizardLoader />
        ) : (
          [
            <ProductInformation onContinue={increaseStep} />,
            <Form onContinue={sendPasswordData} onCancel={decreaseStep} />,
            <Feedback
              isLoading={isLoading}
              success={!hasError}
              onContinue={() => setStep(1)}
            />,
          ][step - 1]
        )}
      </div>
    </div>
  );
};

Wizard.propTypes = {
  currentStep: PropTypes.number,
};

Wizard.defaultProps = {
  currentStep: 1,
};

export default Wizard;
