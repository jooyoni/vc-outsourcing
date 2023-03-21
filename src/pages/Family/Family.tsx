import Footer from '../../components/Footer/Footer';
import styles from './Family.module.scss';
function Family() {
  return (
    <div>
      <div className={styles.bannerWrap}>
        <div>
          <div className={styles.circle}>아이스퀘어 벤처스</div>
        </div>
        <div>
          <div className={styles.circle}>환경·투자사업</div>
          <div className={styles.circle}>배터리 소재 사업</div>
        </div>
      </div>
      <section>
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
      </section>
      <Footer />
    </div>
  );
}
export default Family;
