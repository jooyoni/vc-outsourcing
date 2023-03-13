import styles from './Header.module.scss';
import arrow from '../../assets/arrowWhite.png';
import { useState } from 'react';
function Header() {
  const [sideIsOpen, setSideIsOpen] = useState(false);
  const [language, setLanguage] = useState('kor');
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoWrap}>i SQUARE VENTURES</div>
        <div className={styles.right}>
          <ul
            className={`${styles.navigation} ${sideIsOpen ? styles.hit : ''}`}
          >
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>PORTFOLIO</li>
            <li>ESG</li>
            <li>IR</li>
          </ul>
          <div
            className={`${styles.translationWrap} ${
              !sideIsOpen ? styles.hit : ''
            }`}
          >
            <span
              onClick={() => setLanguage('kor')}
              className={language == 'kor' ? styles.hit : ''}
            >
              KOR
            </span>
            <span
              onClick={() => setLanguage('eng')}
              className={language == 'eng' ? styles.hit : ''}
            >
              ENG
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.hamburgerBtn} ${sideIsOpen ? styles.isOpen : ''}`}
        onClick={() => setSideIsOpen((prev) => !prev)}
      >
        <div className={styles.stick}></div>
        <div className={styles.stick}></div>
        <div className={styles.stick}></div>
      </div>
      <div className={`${styles.sideBar} ${sideIsOpen ? styles.isOpen : ''}`}>
        <ul>
          <li>ABOUT</li>
          <li>TEAM</li>
          <li>PORTFOLIO</li>
          <li>ESG</li>
          <li>IR</li>
        </ul>
        <div>
          <span
            onClick={() => setLanguage('kor')}
            className={language == 'kor' ? styles.hit : ''}
          >
            KOR
          </span>
          <span
            onClick={() => setLanguage('eng')}
            className={language == 'eng' ? styles.hit : ''}
          >
            ENG
          </span>
        </div>
      </div>
    </>
  );
}
export default Header;
