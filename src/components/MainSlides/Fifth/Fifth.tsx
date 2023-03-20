import { useEffect, useRef, useState } from 'react';
import styles from './Fifth.module.scss';
function Fifth() {
  const intersectRef = useRef<HTMLDivElement>(null);
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    if (!intersectRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsShowing(true);
        } else {
          setIsShowing(false);
        }
      },
      { threshold: isShowing ? 0.2 : 0.5 },
    );
    io.observe(intersectRef.current);
    return () => io.disconnect();
  }, [isShowing]);
  return (
    <div
      className={`${styles.container} ${isShowing ? styles.isIntersected : ''}`}
    >
      <div className={styles.text}>
        <h3>i SQUARE VENTURES</h3>
        <span>함께 성장하는 Partnership</span>
        <p>
          보다 믿음직한 파트너가 되기 위해 업계 최고의 전문가 그룹과
          <br />
          글로벌 수준의 투자역량을 갖춘 회사로 끊임없이 발전해 나갈 것입니다.
        </p>
      </div>
      <div className={styles.logoListWrap}>로고영역</div>
      <div className={styles.intersecter} ref={intersectRef}></div>
    </div>
  );
}
export default Fifth;
