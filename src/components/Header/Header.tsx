import styles from './Header.module.scss';
import arrow from '../../assets/arrowWhite.png';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sideIsOpen, setSideIsOpen] = useState(false);
  const [language, setLanguage] = useState('kor');
  useEffect(() => {
    if (!sideIsOpen) document.body.style.overflow = 'unset';
    else {
      if (window.innerWidth <= 1023) document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sideIsOpen]);
  useEffect(() => {
    if (window.innerWidth <= 1023) setSideIsOpen(false);
  }, [location]);

  const navListRef = useRef<HTMLUListElement>(null);
  const [borderLeft, setBorderLeft] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  useEffect(() => {
    if (!navListRef.current) return;
    let idx: number | undefined = undefined;
    if (location.pathname == '/') {
      setBorderLeft(0);
      setBorderWidth(0);
    }
    if (location.pathname.includes('/about')) idx = 0;
    else if (location.pathname.includes('/team')) idx = 1;
    else if (location.pathname.includes('/portfolio')) idx = 2;
    else if (location.pathname.includes('/ir')) idx = 3;
    else if (location.pathname.includes('/family')) idx = 4;
    if (!idx && idx !== 0) return;
    let li = navListRef.current.childNodes[idx] as HTMLLIElement;
    setBorderLeft(li.offsetLeft);
    setBorderWidth(li.offsetWidth);
  }, [location]);

  const { t, i18n } = useTranslation();
  const changelanguageToKo = () => i18n.changeLanguage('ko');
  const changelanguageToEn = () => i18n.changeLanguage('en');
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoWrap} onClick={() => navigate('/')}>
          Ecopro Partners
        </div>
        <div className={styles.right}>
          <ul
            className={`${styles.navigation} ${sideIsOpen ? styles.hit : ''}`}
            ref={navListRef}
          >
            <li
              onClick={() => {
                navigate('/about');
              }}
            >
              <span>ABOUT</span>
            </li>
            <li
              onClick={() => {
                navigate('/team');
              }}
            >
              <span>TEAM</span>
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                navigate('/portfolio');
              }}
            >
              <span>PORTFOLIO</span>
              <nav className={`${styles.subMenuWrap}`}>
                <ul>
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/portfolio?tab=0');
                    }}
                  >
                    <span>펀드운용</span>
                  </li>
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/portfolio?tab=1');
                    }}
                  >
                    <span>투자현황</span>
                  </li>
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/portfolio?tab=2');
                    }}
                  >
                    <span>펀드운용현황</span>
                  </li>
                </ul>
              </nav>
            </li>
            <li
              onClick={() => {
                navigate('/ir');
              }}
            >
              <span>IR</span>
            </li>
            <li
              onClick={() => {
                navigate('/family');
              }}
            >
              <span>FAMILY</span>
            </li>
            <div
              className={styles.borderBottom}
              style={{ left: borderLeft, width: borderWidth }}
            ></div>
          </ul>
          <div
            className={`${styles.translationWrap} ${
              !sideIsOpen ? styles.hit : ''
            }`}
          >
            <span
              onClick={() => {
                setLanguage('kor');
                changelanguageToKo();
              }}
              className={language == 'kor' ? styles.hit : ''}
            >
              KOR
            </span>
            <span
              onClick={() => {
                setLanguage('eng');
                changelanguageToEn();
              }}
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
          <li onClick={() => navigate('/about')}>ABOUT</li>
          <li onClick={() => navigate('/team')}>TEAM</li>
          <li onClick={() => navigate('/portfolio')}>PORTFOLIO</li>
          <li onClick={() => navigate('/ir')}>IR</li>
          <li onClick={() => navigate('/family')}>FAMILY</li>
        </ul>
        <div>
          <span
            onClick={() => {
              setLanguage('kor');
              changelanguageToKo();
            }}
            className={language == 'kor' ? styles.hit : ''}
          >
            KOR
          </span>
          <span
            onClick={() => {
              setLanguage('eng');
              changelanguageToEn();
            }}
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
