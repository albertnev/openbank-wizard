import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { wizardButton as wizardButtonPropTypes } from '../../shared/propTypes';
import { WizardButton } from '../WizardButton';
import styles from './WizardFooter.module.scss';

const WizardFooter = ({ cancelButton, continueButton }) => (
  <footer data-testid="wizard-footer" className={styles.footerContainer}>
    {cancelButton.text && (
      <WizardButton
        className={cx({
          [styles.cancelButton]: true,
          [cancelButton.className]: cancelButton.className,
        })}
        onClick={cancelButton.onClick}
        disabled={cancelButton.disabled}
        isLink={cancelButton.isLink === undefined ? true : cancelButton.isLink}
        text={cancelButton.text}
        data-testid={cancelButton['data-testid']}
      />
    )}
    {continueButton.text && (
      <WizardButton
        className={cx({
          [styles.continueButton]: true,
          [continueButton.className]: continueButton.className,
        })}
        onClick={continueButton.onClick}
        disabled={continueButton.disabled}
        isLink={continueButton.isLink}
        text={continueButton.text}
        data-testid={continueButton['data-testid']}
      />
    )}
  </footer>
);

WizardFooter.propTypes = {
  cancelButton: PropTypes.shape(wizardButtonPropTypes),
  continueButton: PropTypes.shape(wizardButtonPropTypes),
};

WizardFooter.defaultProps = {
  cancelButton: {},
  continueButton: {},
};

export default WizardFooter;
