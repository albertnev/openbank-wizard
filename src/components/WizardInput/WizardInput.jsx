import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { WizardIcon } from '..';
import styles from './WizardInput.module.scss';

const WizardInput = ({
  onChange,
  label,
  placeholder,
  maskContent,
  toggleVisibility,
  largeText,
  showRemainingCharacters,
}) => {
  const [maskedContent, setMaskedContent] = useState(maskContent);

  return (
    <div className={styles.inputWrapper}>
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label>
          <span className={styles.inputLabel}>{label}</span>
          <div className={styles.inputContainer}>
            <input
              type={maskedContent ? 'password' : 'text'}
              placeholder={placeholder}
              onChange={onChange}
            />
            {toggleVisibility && (
              <WizardIcon
                iconName={maskedContent ? 'FaEye' : 'FaEyeSlash'}
                className={styles.visibilityIcon}
                onClick={() => setMaskedContent(!maskedContent)}
              />
            )}
          </div>
        </label>
      )}
    </div>
  );
};

WizardInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maskContent: PropTypes.bool,
  toggleVisibility: PropTypes.bool,
  largeText: PropTypes.bool,
  showRemainingCharacters: PropTypes.bool,
};

WizardInput.defaultProps = {
  onChange: () => null,
  label: '',
  placeholder: '',
  maskContent: false,
  toggleVisibility: true,
  largeText: false,
  showRemainingCharacters: false,
};

export default WizardInput;
