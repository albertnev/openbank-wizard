import React from 'react';
import cx from 'classnames';
import { wizardButton as wizardButtonPropTypes } from '../../shared/propTypes';
import { getRenderedText } from '../../helpers';
import styles from './WizardButton.module.scss';

const WizardButton = ({ text, onClick, disabled, isLink, className }) => (
  <button
    type="button"
    data-testid="wizard-button"
    className={cx({
      [styles.wizardButton]: true,
      [styles.actionLink]: isLink,
      [styles.actionButton]: !isLink,
      [className]: className,
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {getRenderedText(text)}
  </button>
);

WizardButton.propTypes = wizardButtonPropTypes;

WizardButton.defaultProps = {
  className: undefined,
  text: '',
  onClick: () => null,
  disabled: false,
  isLink: false,
};

export default WizardButton;
