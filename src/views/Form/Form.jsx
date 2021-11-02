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
      disabled:
        Object.keys(validInputs).filter((inputKey) => validInputs[inputKey])
          .length !== 2 || errorMessage?.length > 0,
    },
    cancelButton: {
      text: t('cancel'),
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
      <ul className={styles.masterKeyInputs}>
        <li>
          <WizardInput
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
        <p className={styles.errorMessage}>
          <WizardIcon iconName="FaExclamationCircle" /> {errorMessage}
        </p>
      )}
      <section>
        <p>{t('youCanAlsoCreateAHint')}</p>
        <WizardInput
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
