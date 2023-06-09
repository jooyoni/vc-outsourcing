import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Fifth.module.scss';
function Fifth() {
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
    <div
      className={`${styles.container} ${isShowing ? styles.isIntersected : ''}`}
    >
      <div className={styles.text}>
        <h3>EcoPro Partners</h3>
        <span>{t('fifth.1')}</span>
        <p>{t('fifth.2')}</p>
      </div>
      {/* <div className={styles.logoListWrap}>로고영역</div> */}
      <div className={styles.intersecter} ref={intersectRef}></div>
    </div>
  );
}
export default Fifth;
