import styles from './Header.module.scss';
import arrow from '../../assets/arrowWhite.png';
import { useState } from 'react';
function Header() {
  const [sideIsOpen, setSideIsOpen] = useState(false);
  const [language, setLanguage] = useState('kor');
  return (
    <div className={styles.container}>
      <div className={styles.logoWrap}>i SQUARE VENTURES</div>
      <ul className={styles.navigation}>
        <li>ABOUT</li>
        <li>TEAM</li>
        <li>PORTFOLIO</li>
        <li>ESG</li>
        <li>IR</li>
      </ul>
      <div className={styles.right}>
        <div className={styles.translationWrap}>
          <span onClick={() => setLanguage('kor')}>KOR</span>
          <img
            src={arrow}
            className={language == 'eng' ? styles.rightArrow : ''}
          />
          <span onClick={() => setLanguage('eng')}>ENG</span>
        </div>
        <div
          className={`${styles.hamburgerBtn} ${
            sideIsOpen ? styles.isOpen : ''
          }`}
          onClick={() => setSideIsOpen((prev) => !prev)}
        >
          <div className={styles.stick}></div>
          <div className={styles.stick}></div>
          <div className={styles.stick}></div>
        </div>
      </div>
    </div>
  );
}
export default Header;
