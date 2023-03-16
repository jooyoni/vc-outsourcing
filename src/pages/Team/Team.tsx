import Footer from '../../components/Footer/Footer';
import styles from './Team.module.scss';
function Team() {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.contentArea}>
          <h3>TEAM</h3>
          <h2>아이스퀘어벤처스</h2>
          <p>
            아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로 지속가능한
            기업생태계 구축을 위해 환경 및 전지재료 사업 기업인 ㈜에코프로가
            설립한 중소기업창업투자회사입니다.
          </p>
        </div>
      </section>
      <section className={styles.contentArea}>
        <div className={styles.leadershipWrap}>
          <h3>- LEADERSHIP</h3>
          <ul>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.investmentWrap}>
          <h3>- INVESTMENT</h3>
          <ul>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.operationWrap}>
          <h3>- OPERATION</h3>
          <ul>
            <li>
              <div className={styles.imageWrap}></div>
              <div className={styles.detailWrap}>
                <span className={styles.position}>CEO 대표이사</span>
                <span className={styles.name}>이재훈</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Team;
