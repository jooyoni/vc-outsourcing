import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import Footer from '../../components/Footer/Footer';
import styles from './Family.module.scss';
import test from '../../assets/familyLogoTest.png';
function Family() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div
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
      </div>
      <section
        className={`${styles.contentWrap} ${inView2 ? styles.isShowing : ''}`}
      >
        <div className={styles.contentArea}>
          <div className={styles.left}>
            <div className={styles.title}>{t('family.2')}</div>
            <ul>
              <li>
                <img src={test} alt="" />
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{t('family.3')}</div>
            <ul>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>{' '}
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
              </li>
            </ul>
          </div>
        </div>
        <div ref={ref2} className={styles.observer}></div>
      </section>
      <Footer />
    </div>
  );
}
export default Family;
