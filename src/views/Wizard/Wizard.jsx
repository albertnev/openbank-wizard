import React, { useState } from 'react';
import { WizardNav } from '../../components';
import { Feedback, Form, ProductInformation } from '..';
import styles from './Wizard.module.scss';

const Wizard = () => {
  const numberOfSteps = 3;
  const [step, setStep] = useState(1);

  const increaseStep = () => {
    if (step + 1 <= numberOfSteps) setStep(step + 1);
  };
  const decreaseStep = () => {
    if (step - 1 > 0) setStep(step - 1);
  };

  return (
    <div className={styles.wizardContainer}>
      {step < numberOfSteps && (
        <div className={styles.wizardNavContainer}>
          <WizardNav numberOfSteps={numberOfSteps} currentStep={step} />
        </div>
      )}
      <div className={styles.pageContent}>
        {
          [
            <ProductInformation increaseStep={increaseStep} />,
            <Form increaseStep={increaseStep} decreaseStep={decreaseStep} />,
            <Feedback />,
          ][step - 1]
        }
      </div>
    </div>
  );
};

export default Wizard;
