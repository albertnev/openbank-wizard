import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getRenderedText, getSecurityKeysStatus } from '../../helpers';
import { WizardIcon } from '../WizardIcon';
import { WizardSecurityList } from '../WizardSecurityList';
import styles from './WizardInput.module.scss';

const WizardInput = ({
  onChange,
  defaultValue,
  label,
  placeholder,
  maskContent,
  visibilityToggle,
  maxLength,
  showRemainingCharacters,
  errorMessage,
  isValid,
  setIsValid,
  showSecurityHints,
  securityKeys,
}) => {
  const [charactersCount, setCharactersCount] = useState(0);
  const [maskedContent, setMaskedContent] = useState(maskContent);
  const [strengthPercentage, setStrengthPercentage] = useState(0);
  const [securityConditions, setSecurityConditions] = useState([]);

  const checkSecurity = (value) => {
    const conditions = getSecurityKeysStatus(value, securityKeys);
    const securityPercentage = Math.round(
      (conditions.filter((cond) => cond.succeeded).length * 100) /
        conditions.length
    );

    setIsValid?.(securityPercentage === 100);
    setStrengthPercentage(securityPercentage);
    setSecurityConditions(conditions);
  };

  const updateFeedback = (value) => {
    if (securityKeys) checkSecurity(value);
    setCharactersCount(value.length);
  };

  const handleOnChange = (ev) => {
    const { value } = ev.target;

    updateFeedback(value);
    onChange(value);
  };

  useEffect(() => {
    if (defaultValue) updateFeedback(defaultValue);
  }, []);

  return (
    <div data-testid="wizard-input" className={styles.inputWrapper}>
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label data-testid="wizard-input-label-container">
          <span
            data-testid="wizard-input-label-text"
            className={styles.inputLabel}
          >
            {getRenderedText(label)}
          </span>
          <div
            data-testid="wizard-input-input-container"
            className={cx({
              [styles.inputContainer]: true,
              [styles.success]: isValid,
              [styles.error]: isValid === false,
            })}
          >
            <input
              data-testid="wizard-input-input-control"
              type={maskedContent ? 'password' : 'text'}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onChange={handleOnChange}
              maxLength={maxLength}
            />
            {visibilityToggle && (
              <WizardIcon
                data-testid="wizard-input-mask-toggle"
                iconName={maskedContent ? 'FaEye' : 'FaEyeSlash'}
                className={styles.visibilityIcon}
                onClick={() => setMaskedContent((current) => !current)}
              />
            )}
          </div>
          {securityKeys && (
            <div
              data-testid="wizard-input-security-meter"
              className={cx({
                [styles.securityMeter]: true,
                [styles.none]: strengthPercentage === 0,
                [styles.low]:
                  strengthPercentage > 0 && strengthPercentage <= 50,
                [styles.middle]:
                  strengthPercentage > 50 && strengthPercentage < 100,
                [styles.high]: strengthPercentage === 100,
              })}
            />
          )}
          {showRemainingCharacters && maxLength && (
            <span
              data-testid="wizard-input-characters-left"
              className={styles.charactersLeft}
            >
              {charactersCount}/{maxLength}
            </span>
          )}
          {securityConditions.length > 0 && showSecurityHints && (
            <WizardSecurityList securityConditions={securityConditions} />
          )}
          {errorMessage && (
            <div
              data-testid="wizard-input-error-message"
              className={styles.errorMessage}
            >
              {getRenderedText(errorMessage)}
            </div>
          )}
        </label>
      )}
    </div>
  );
};

WizardInput.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  placeholder: PropTypes.string,
  maskContent: PropTypes.bool,
  visibilityToggle: PropTypes.bool,
  maxLength: PropTypes.number,
  showRemainingCharacters: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isValid: PropTypes.bool,
  setIsValid: PropTypes.func,
  showSecurityHints: PropTypes.bool,
  securityKeys: PropTypes.arrayOf(
    PropTypes.shape({
      hint: PropTypes.string,
      condition: PropTypes.oneOfType([
        PropTypes.instanceOf(RegExp),
        PropTypes.func,
      ]),
    })
  ),
};

WizardInput.defaultProps = {
  onChange: () => null,
  label: '',
  defaultValue: '',
  placeholder: '',
  maskContent: false,
  visibilityToggle: false,
  maxLength: undefined,
  showRemainingCharacters: false,
  errorMessage: '',
  isValid: undefined,
  setIsValid: undefined,
  showSecurityHints: true,
  securityKeys: undefined,
};

export default WizardInput;
