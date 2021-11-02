import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { WizardIcon } from '../../components';
import { ContentPage } from '../ContentPage';
import styles from './ProductInformation.module.scss';

import saveAllYourDataImg from '../../assets/img/group.svg';
import createYourMasterKeyImg from '../../assets/img/group-3.svg';

const ProductInformation = ({ onContinue }) => {
  const { t } = useTranslation();

  const footer = {
    continueButton: {
      text: () => (
        <>
          <span>{t('continue')} </span>
          <WizardIcon iconName="FaChevronRight" />
        </>
      ),
      onClick: () => {
        onContinue();
      },
    },
    cancelButton: {
      text: t('cancel'),
    },
  };

  return (
    <>
      <ContentPage footer={footer}>
        <section>
          <ul className={styles.infoSummary}>
            <li>
              <div className={styles.imgContainer}>
                <img alt={t('userGearsImgAlt')} src={saveAllYourDataImg} />
              </div>
              <p>{t('saveAllYourDataDesc')}</p>
            </li>
            <li>
              <div className={styles.imgContainer}>
                <img alt={t('lockImgAlt')} src={createYourMasterKeyImg} />
              </div>
              <p>{t('createYourMasterKeyDesc')}</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>{t('howItWorksTitle')}</h3>
          <p>{t('howItWorksDesc')}</p>
        </section>
        <section>
          <h3>{t('whichDataCanYouSaveTitle')}</h3>
          <p>{t('whichDataCanYouSaveDesc')}</p>
        </section>
      </ContentPage>
    </>
  );
};

ProductInformation.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default ProductInformation;
