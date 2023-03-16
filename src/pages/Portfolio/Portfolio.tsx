import Footer from '../../components/Footer/Footer';
import styles from './Portfolio.module.scss';
import home from '../../assets/home.png';
import arrow from '../../assets/arrowBottom.png';
import { useState } from 'react';
function Portfolio() {
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.contentArea}>
          <h3>Portfolio</h3>
          <h4>펀드운용</h4>
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
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>IR</li>
                <li>ABOUT</li>
              </ul>
            </div>
            <div
              className={`${styles.nowTabWrap} ${tabOpen ? styles.isOpen : ''}`}
            >
              <span>펀드운용</span>
              <img src={arrow} />
              <ul className={styles.subList}>
                <li>펀드운용</li>
                <li>투자현황</li>
                <li>esg 투자 실천</li>
                <li>펀드 운용 현황</li>
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
