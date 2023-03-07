import styles from './Footer.module.scss';
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>i SQUARE VENTURES</h1>
          <span>Copyright@2023 i SQUARE VENTURES Co. Ltd.</span>
        </div>
        <ul className={styles.right}>
          <li>스튜어드십코드</li>
          <li>사이버신고센터</li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.companyInfo}>
          <li>서울특별시 강남구 테헤란로 314 금성빌딩 12층</li>
          <li>Tel.02-0000-0000</li>
          <li>Fax.02-000-0000</li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
