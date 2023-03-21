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
    </div>
  );
}
export default Family;
