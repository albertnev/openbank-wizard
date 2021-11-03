import React from 'react';
import cx from 'classnames';

import { wizardButton as wizardButtonPropTypes } from '../../shared/propTypes';
import { getRenderedText } from '../../helpers';
import styles from './WizardButton.module.scss';

const WizardButton = ({
  text,
  onClick,
  disabled,
  isLink,
  className,
  'data-testid': dataTestId,
}) => (
  <button
    type="button"
    data-testid={dataTestId}
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
  'data-testid': 'wizard-button',
};

export default WizardButton;
