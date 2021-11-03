import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { WizardIcon, WizardInput } from '../../components';
import { ContentPage } from '../ContentPage';
import styles from './Form.module.scss';

const Form = ({ onCancel, onContinue }) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [optionalHint, setOptionalHint] = useState('');
  const [validInputs, setValidInputs] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const footer = {
    continueButton: {
      text: () => (
        <>
          <span>{t('continue')} </span>
          <WizardIcon iconName="FaChevronRight" />
        </>
      ),
      onClick: () => {
        onContinue({ password, repeatedPassword, optionalHint });
      },
      'data-testid': 'form-continue-button',
      disabled:
        Object.keys(validInputs).filter((inputKey) => validInputs[inputKey])
          .length !== 2 || errorMessage?.length > 0,
    },
    cancelButton: {
      text: t('cancel'),
      'data-testid': 'form-cancel-button',
      onClick: () => {
        onCancel();
      },
    },
  };

  useEffect(() => {
    if (repeatedPassword.length > 0 && password !== repeatedPassword) {
      setErrorMessage(t('passwordsDoNotMatch'));
    } else {
      setErrorMessage('');
    }
  }, [password, repeatedPassword]);

  const securityKeys = [
    { hint: t('pwdAtLeastOneSpecialCharacter'), condition: /[^A-Za-z0-9]+/ },
    { hint: t('pwdAtLeastOneNumber'), condition: /.*[0-9].*/ },
    { hint: t('pwdAtLeastOneUppercase'), condition: /[A-Z]+/ },
    { hint: t('pwdAtLeastOneLowercase'), condition: /[a-z]+/ },
    { hint: t('pwdAtLeastEightCharactersLong'), condition: /.{8,}/ },
  ];

  return (
    <ContentPage footer={footer}>
      <p>{t('createPasswordFirstStep')}</p>
      <ul
        data-testid="wizard-form-password-inputs-container"
        className={styles.masterKeyInputs}
      >
        <li>
          <WizardInput
            data-testid="wizard-form-password"
            label={t('createYourMasterKey')}
            placeholder={t('introduceYourMasterKey')}
            maxLength={24}
            defaultValue={password}
            maskContent
            visibilityToggle
            isValid={validInputs[0]}
            setIsValid={(valid) => {
              setValidInputs((state) => ({ ...state, 0: valid }));
            }}
            securityKeys={securityKeys}
            onChange={(value) => {
              setPassword(value);
            }}
          />
        </li>
        <li>
          <WizardInput
            data-testid="wizard-form-repeat-password"
            label={t('repeatYourMasterKey')}
            placeholder={t('repeatYourMasterKey')}
            maxLength={24}
            defaultValue={repeatedPassword}
            maskContent
            visibilityToggle
            securityKeys={securityKeys}
            isValid={validInputs[1]}
            setIsValid={(valid) => {
              setValidInputs((state) => ({ ...state, 1: valid }));
            }}
            showSecurityHints={false}
            onChange={(value) => {
              setRepeatedPassword(value);
            }}
          />
        </li>
      </ul>
      {errorMessage && (
        <p
          data-testid="wizard-form-error-message"
          className={styles.errorMessage}
        >
          <WizardIcon iconName="FaExclamationCircle" /> {errorMessage}
        </p>
      )}
      <section data-testid="wizard-form-hint-section">
        <p>{t('youCanAlsoCreateAHint')}</p>
        <WizardInput
          data-testid="wizard-form-hint"
          label={t('createYourHintOptional')}
          placeholder={t('introduceYourHint')}
          maxLength={255}
          showRemainingCharacters
          onChange={(value) => {
            setOptionalHint(value);
          }}
        />
      </section>
    </ContentPage>
  );
};

Form.propTypes = {
  onContinue: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Form;
