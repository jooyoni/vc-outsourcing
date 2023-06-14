import styles from './Third.module.scss';
import plus from '../../../assets/plus.png';
import plusWhite from '../../../assets/plusWhite.png';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
function Third() {
  const [detailOpen, setDetailOpen] = useState([false, false, false]);
  const intersectRef = useRef<HTMLDivElement>(null);
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    if (!intersectRef.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsShowing(true);
      } else {
        setIsShowing(false);
      }
    });
    io.observe(intersectRef.current);
    return () => io.disconnect();
  }, [isShowing]);
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className={styles.containerWrap}>
        <div
          className={`${styles.container} ${styles.pc} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <div className={styles.left}>
            <div className={styles.textWrap}>
              <span>{t('third.0')}</span>
              <p dangerouslySetInnerHTML={{ __html: t('third.1') }}></p>
              <p>{t('third.2')}</p>
            </div>
          </div>
          <div className={styles.right}>
            <ul>
              {(
                t('third.3', { returnObjects: true }) as {
                  title: string;
                  content: string;
                }[]
              ).map((data, idx) => (
                <li className={detailOpen[idx] ? styles.isOpen : ''} key={idx}>
                  <div className={styles.title}>
                    <h3>{data.title}</h3>
                    {/* <img src={plus} /> */}
                  </div>
                  <p>{data.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`${styles.container} ${styles.mobile} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <span>{t('third.0')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('third.1') }}></h2>
          <p>{t('third.2')}</p>
          <div className={styles.infomationWrap}>
            <ul>
              {(
                t('third.3', { returnObjects: true }) as {
                  title: string;
                  content: string;
                }[]
              ).map((data, idx) => (
                <li className={detailOpen[idx] ? styles.isOpen : ''} key={idx}>
                  <div className={styles.title}>
                    <span>{data.title}</span>
                    {/* <img src={plusWhite} /> */}
                  </div>
                  <div className={styles.detail}>
                    <p>{data.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.intersecter} ref={intersectRef}></div>
      </div>
    </>
  );
}
export default Third;
