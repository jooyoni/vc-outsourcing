import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setTrue } from '../../store/stewardshipSlide';
import { RootState } from '../../store/store';
import Modal from '../Modal/Modal';
import styles from './Footer.module.scss';

function Footer() {
  const { t, i18n } = useTranslation();

  //dispatch에 action을 전달하면 해당 동작이 실행된다
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h1>Ecopro Partners</h1>
            <span>Copyright@2023 Ecopro Partners Co. Ltd.</span>
          </div>
          <ul className={styles.right}>
            <li
              onClick={() => {
                dispatch(setTrue());
              }}
            >
              {t('footer.1')}
            </li>
            {/* <li>개인정보처리방침</li>
            <li>고객정보 취급방침</li>
            <li>사이버신고센터</li> */}
          </ul>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.companyInfo}>
            <li>
              <span>{t('footer.2')}</span>
              <span> (28126) {t('footer.3')}</span>
            </li>
            <li>
              <span>{t('footer.4')}</span>
              <span>(06775) {t('footer.5')}</span>
            </li>
          </ul>
          <span className={styles.copyright}>
            Copyright@2023 Ecopro Partners Co. Ltd.
          </span>
        </div>
      </div>
    </>
  );
}
export default Footer;
