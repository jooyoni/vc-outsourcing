import styles from './IRBanner.module.scss';
import home from '../../assets/home.png';
import arrow from '../../assets/arrowBottom.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
function IRBanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
  useEffect(() => {
    let tab = new URL(document.URL).searchParams.get('tab') || '0';
    if (!tab || tab == '0') setTitle('소식알림');
    else if (tab == '1') setTitle('홍보자료');
  }, [location]);
  useEffect(() => {
    if (subPageOpen) setTabOpen(false);
  }, [subPageOpen]);
  useEffect(() => {
    if (tabOpen) setSubPageOpen(false);
  }, [tabOpen]);
  const [ref1, inView1] = useInView();
  const { t, i18n } = useTranslation();
  return (
    <section className={styles.banner}>
      <div
        className={`${styles.contentArea} ${inView1 ? styles.isShowing : ''}`}
      >
        <h3>IR</h3>
        {/* <h4>{t(`ir.${title}`)}</h4> */}
        <nav>
          <div className={styles.homeBtn} onClick={() => navigate('/')}>
            <img src={home} />
          </div>
          <ul className={styles.category}>
            <li
              onClick={() => navigate('/ir?tab=0')}
              className={title == '소식알림' ? styles.isOpen : ''}
            >
              <span>{t(`ir.소식알림`)}</span>
            </li>
            <li
              onClick={() => navigate('/ir?tab=1')}
              className={title == '홍보자료' ? styles.isOpen : ''}
            >
              <span>{t(`ir.홍보자료`)}</span>
            </li>
          </ul>
          {/* <div className={styles.category}>
            <div
              className={`${styles.nowPageWrap} ${
                subPageOpen ? styles.isOpen : ''
              }`}
              onClick={() => setSubPageOpen((prev) => !prev)}
            >
              <span>IR</span>
              <img src={arrow} />
              <ul className={styles.subList}>
                <li onClick={() => navigate('/about')}>ABOUT</li>
                <li onClick={() => navigate('/team')}>TEAM</li>
                <li onClick={() => navigate('/portfolio')}>PORTFOLIO</li>
                <li onClick={() => navigate('/family')}>FAMILY</li>
              </ul>
            </div>
            <div
              className={`${styles.nowTabWrap} ${tabOpen ? styles.isOpen : ''}`}
              onClick={() => setTabOpen((prev) => !prev)}
            >
              <span>{t(`ir.${title}`)}</span>
              <img src={arrow} />
              <ul className={styles.subList}>
                <li onClick={() => navigate('/ir?tab=0')}>
                  {t(`ir.소식알림`)}
                </li>
                <li onClick={() => navigate('/ir?tab=1')}>
                  {t(`ir.홍보자료`)}
                </li>
              </ul>
            </div>
          </div> */}
          <div className={styles.shadow}></div>
        </nav>
      </div>
      <div ref={ref1} className={styles.observer}></div>
    </section>
  );
}
export default IRBanner;
