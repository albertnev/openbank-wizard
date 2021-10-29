import React from 'react';
import { useTranslation } from 'react-i18next';
import { WizardFooter, WizardIcon } from '../../components';
import step from './step1.png';

const ProductInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <img alt="Product Information" src={step} />
      <WizardFooter
        cancelText={t('cancel')}
        continueText={() => (
          <>
            <span>{t('continue')} </span>
            <WizardIcon iconName="FaChevronRight" />
          </>
        )}
      />
    </>
  );
};

export default ProductInformation;
