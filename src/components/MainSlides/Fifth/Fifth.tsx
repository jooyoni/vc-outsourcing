import styles from './Fifth.module.scss';
function Fifth() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
export default Fifth;
