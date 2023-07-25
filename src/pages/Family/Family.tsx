import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import Footer from '../../components/Footer/Footer';
import styles from './Family.module.scss';
import axiosClient from '../../libs/axiosClient';
interface IFamilyType {
  background_image: null | string;
  capital: null | string;
  description: null | string;
  english_description: null | string;
  english_name: string;
  establishment_date: 'string';
  logo_image: null | string;
  major_bussiness: string;
  english_major_bussiness: string;
  name: string;
  sort_order: number;
  url: null | string;
}
function Family() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const { t, i18n } = useTranslation();
  const [familyData, setFamilyData] = useState<IFamilyType[]>([]);
  useEffect(() => {
    axiosClient.get('/api/family').then((res) => setFamilyData(res.data));
  }, []);
  return (
    <div>
      {/* <div
        className={`${styles.bannerWrap} ${inView1 ? styles.isShowing : ''}`}
      >
        <div>
          <div className={styles.circleWrap}>
            <div className={styles.circle}></div>
            <span>{t('family.1')}</span>
          </div>
        </div>
        <div ref={ref1} className={styles.observer}></div>
        <div>
          <div className={styles.circleWrap}>
            <div className={styles.circle}></div>
            <span>{t('family.2')}</span>
          </div>
          <div className={styles.circleWrap}>
            <div className={styles.circle}></div>
            <span>{t('family.3')}</span>
          </div>
        </div>
      </div> */}
      <section
        className={`${styles.contentWrap} ${inView2 ? styles.isShowing : ''}`}
      >
        <div className={styles.contentArea}>
          <ul>
            {familyData.map((family, idx) => (
              <li
                key={idx}
                style={{
                  backgroundImage: family.background_image
                    ? `url(${
                        process.env.REACT_APP_API_URL +
                        '/storage/' +
                        family.background_image
                      })`
                    : '',
                }}
              >
                <div className={styles.detailBox}>
                  <div className={styles.logoWrap}>
                    {family.logo_image ? (
                      <img
                        src={
                          process.env.REACT_APP_API_URL +
                          '/storage/' +
                          family.logo_image
                        }
                        alt={family.name}
                        style={{ cursor: family.url ? 'pointer' : 'unset' }}
                        onClick={() => {
                          if (family.url) window.open(family.url, '_blank');
                        }}
                      />
                    ) : (
                      <div style={{ height: '32px' }}></div>
                    )}
                  </div>
                  {/* <p className={styles.description}>
                    {i18n.resolvedLanguage == 'ko'
                      ? family.description
                      : family.english_description}
                  </p> */}
                  <ul className={styles.companyInfoList}>
                    {/* <li>
                      {t('family.4')} :{' '}
                      {i18n.resolvedLanguage == 'ko'
                        ? family.establishment_date
                            .substring(0, 7)
                            .replace(/-/g, '.')
                        : family.establishment_date.substring(5, 7) +
                          '.' +
                          family.establishment_date.substring(0, 4)}
                    </li> */}
                    {/* {family.major_bussiness && (
                      <li>
                        {t('family.5')} :{' '}
                        {i18n.resolvedLanguage == 'ko'
                          ? family.major_bussiness
                          : family.english_major_bussiness}
                      </li>
                    )} */}
                    {/* {family.capital && (
                      <li>
                        {t('family.6')} : {family.capital}
                        {t('family.7')}
                      </li>
                    )} */}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div ref={ref2} className={styles.observer}></div>
      </section>
      <Footer />
    </div>
  );
}
export default Family;
