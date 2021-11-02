import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { WizardIcon } from '../../components';
import { ContentPage } from '../ContentPage';
import styles from './Feedback.module.scss';

const Feedback = ({ onContinue, success }) => {
  const { t } = useTranslation();

  const footer = {
    continueButton: {
      className: styles.feedbackButton,
      isLink: true,
      text: success ? t('access') : t('returnToPasswordManager'),
      onClick: () => {
        onContinue();
      },
    },
  };

  return (
    <ContentPage footer={footer} hideTitle>
      <h1 className={styles.feedbackTitleContainer}>
        <WizardIcon
          className={cx({
            [styles.feedbackIcon]: true,
            [styles.successIcon]: success,
            [styles.errorIcon]: !success,
          })}
          size={45}
          iconName={success ? 'FaRegCheckCircle' : 'FaRegTimesCircle'}
        />{' '}
        <span className={styles.feedbackTitle}>
          {success
            ? t('passwordManagerCreatedSuccessfully')
            : t('anErrorOcurred')}
        </span>
      </h1>
      {success ? (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            sagittis odio sed purus molestie vulputate.
          </p>
          <p>
            Sed hendrerit in leo in congue. Nullam commodo vehicula tellus ut
            tempus. Aliquam convallis ligula ante, vel efficitur risus dapibus
            non.
          </p>{' '}
        </>
      ) : (
        <p>{t('couldNotSetMasterKey')}</p>
      )}
    </ContentPage>
  );
};

Feedback.propTypes = {
  success: PropTypes.bool.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default Feedback;
