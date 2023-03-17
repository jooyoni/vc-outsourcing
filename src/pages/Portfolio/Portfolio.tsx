import Footer from '../../components/Footer/Footer';
import styles from './Portfolio.module.scss';
import home from '../../assets/home.png';
import arrow from '../../assets/arrowBottom.png';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
  useEffect(() => {
    let params = new URL(document.URL).searchParams;
    if (!params.get('tab') || params.get('tab') == '0') setTitle('펀드운용');
    else if (params.get('tab') == '1') setTitle('투자현황');
    else if (params.get('tab') == '2') setTitle('esg 투자 실천');
    else if (params.get('tab') == '3') setTitle('펀드 운용 현황');
  }, [location]);
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.contentArea}>
          <h3>Portfolio</h3>
          <h4>{title}</h4>
          <nav>
            <div className={styles.homeBtn}>
              <img src={home} />
            </div>
            <div
              className={`${styles.nowPageWrap} ${
                subPageOpen ? styles.isOpen : ''
              }`}
              onClick={() => setSubPageOpen((prev) => !prev)}
            >
              <span>PORTFOLIO</span>
              <img src={arrow} />
              <ul className={styles.subList}>
                <li onClick={() => navigate('/about')}>ABOUT</li>
                <li onClick={() => navigate('/team')}>TEAM</li>
                <li onClick={() => navigate('/ir')}>IR</li>
                <li onClick={() => navigate('/family')}>FAMILY</li>
              </ul>
            </div>
            <div
              className={`${styles.nowTabWrap} ${tabOpen ? styles.isOpen : ''}`}
              onClick={() => setTabOpen((prev) => !prev)}
            >
              <span>{title}</span>
              <img src={arrow} />
              <ul className={styles.subList}>
                <li onClick={() => navigate('/portfolio?tab=0')}>펀드운용</li>
                <li onClick={() => navigate('/portfolio?tab=1')}>투자현황</li>
                <li onClick={() => navigate('/portfolio?tab=2')}>
                  esg 투자 실천
                </li>
                <li onClick={() => navigate('/portfolio?tab=3')}>
                  펀드 운용 현황
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section className={styles.contentArea}></section>
      <Footer />
    </div>
  );
}
export default Portfolio;
