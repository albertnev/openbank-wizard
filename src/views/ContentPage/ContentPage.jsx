import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { WizardFooter, WizardTitle } from '../../components';
import styles from './ContentPage.module.scss';

const ContentPage = ({ title, hideTitle, children, footer }) => {
  const { t } = useTranslation();
  const pageTitle = title || t('createYourPasswordManager');
  const { cancelButton, continueButton } = footer || {};

  return (
    <>
      <div className={styles.wizardPageContent}>
        {!hideTitle && <WizardTitle title={pageTitle} />}
        {children}
      </div>
      {footer && (
        <WizardFooter
          cancelButton={cancelButton}
          continueButton={continueButton}
        />
      )}
    </>
  );
};

ContentPage.propTypes = {
  title: PropTypes.string,
  hideTitle: PropTypes.bool,
  children: PropTypes.node,
  footer: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
  ),
};

ContentPage.defaultProps = {
  title: '',
  hideTitle: false,
  children: null,
  footer: null,
};

export default ContentPage;
