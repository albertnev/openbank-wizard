import React from 'react';
import PropTypes from 'prop-types';
import styles from './WizardFooter.module.scss';

const WizardFooter = ({
  cancelText,
  continueText,
  cancelAction,
  continueAction,
}) => {
  const renderText = (textProp) =>
    typeof textProp === 'function' ? textProp() : textProp;

  return (
    <footer className={styles.footerContainer}>
      {cancelText && (
        <button
          type="button"
          className={styles.cancelButton}
          onClick={cancelAction}
        >
          {renderText(cancelText)}
        </button>
      )}
      {continueText && (
        <button
          type="button"
          className={styles.continueButton}
          onClick={continueAction}
        >
          {renderText(continueText)}
        </button>
      )}
    </footer>
  );
};

WizardFooter.propTypes = {
  cancelText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  continueText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  cancelAction: PropTypes.func,
  continueAction: PropTypes.func,
};

WizardFooter.defaultProps = {
  cancelText: '',
  continueText: '',
  cancelAction: () => null,
  continueAction: () => null,
};

export default WizardFooter;
