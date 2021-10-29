import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { WizardFooter, WizardTitle } from '../../components';
import styles from './ContentPage.module.scss';

const ContentPage = ({ title, children, footer }) => {
  const { t } = useTranslation();
  const pageTitle = title || t('createYourPasswordManager');
  const { cancelText, continueText, cancelAction, continueAction } =
    footer || {};

  return (
    <>
      <div className={styles.wizardPageContent}>
        <WizardTitle title={pageTitle} />
        {children}
      </div>
      {footer && (
        <WizardFooter
          cancelText={cancelText}
          continueText={continueText}
          cancelAction={cancelAction}
          continueAction={continueAction}
        />
      )}
    </>
  );
};

ContentPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.objectOf(PropTypes.object),
};

ContentPage.defaultProps = {
  title: '',
  children: null,
  footer: null,
};

export default ContentPage;
