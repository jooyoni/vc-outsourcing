import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from '../../components/Footer/Footer';
import styles from './Family.module.scss';
function Family() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  return (
    <div>
      <div
        className={`${styles.bannerWrap} ${inView1 ? styles.isShowing : ''}`}
      >
        <div>
          <div className={styles.circleWrap}>
            <div className={styles.circle}></div>
            <span>에코프로 파트너스</span>
          </div>
        </div>
        <div ref={ref1} className={styles.observer}></div>
        <div>
          <div className={styles.circleWrap}>
            <div className={styles.circle}></div>
            <span>환경·투자사업</span>
          </div>
          <div className={styles.circleWrap}>
            <div className={styles.circle}></div>
            <span>배터리 소재 사업</span>
          </div>
        </div>
      </div>
      <section
        className={`${styles.contentWrap} ${inView2 ? styles.isShowing : ''}`}
      >
        <div className={styles.contentArea}>
          <div className={styles.left}>
            <div className={styles.title}>환경·투자사업</div>
            <ul>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>자본금 : 50억원</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>자본금 : 50억원</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>자본금 : 50억원</span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>배터리 소재 사업</div>
            <ul>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>매출액 : 6,161억원</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>매출액 : 6,161억원</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>매출액 : 6,161억원</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>매출액 : 6,161억원</span>
              </li>
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>매출액 : 6,161억원</span>
              </li>{' '}
              <li>
                <span className={styles.date}>설립일 : 1998.10</span>
                <span className={styles.detail}>주요사업 : 창업 투자 회사</span>
                <span>매출액 : 6,161억원</span>
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
