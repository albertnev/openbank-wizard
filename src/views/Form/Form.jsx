import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { WizardIcon, WizardInput } from '../../components';
import { ContentPage } from '..';

const Form = ({ increaseStep, decreaseStep }) => {
  const { t } = useTranslation();
  const footer = {
    cancelText: t('cancel'),
    continueText: () => (
      <>
        <span>{t('continue')} </span>
        <WizardIcon iconName="FaChevronRight" />
      </>
    ),
    cancelAction: () => {
      decreaseStep();
    },
    continueAction: () => {
      increaseStep();
    },
  };

  return (
    <>
      <ContentPage footer={footer}>
        <p>{t('createPasswordFirstStep')}</p>
        <ul>
          <li>
            <WizardInput
              label={t('createYourMasterKey')}
              placeholder={t('introduceYourMasterKey')}
            />
          </li>
          <li>
            <h4>{t('repeatYourMasterKey')}</h4>
          </li>
        </ul>
        <p>{t('youCanAlsoCreateAHint')}</p>
        <h4>{t('createYourHintOptional')}</h4>
      </ContentPage>
    </>
  );
};

Form.propTypes = {
  increaseStep: PropTypes.func.isRequired,
  decreaseStep: PropTypes.func.isRequired,
};

export default Form;
