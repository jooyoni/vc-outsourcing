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
  useEffect(() => {
    if (subPageOpen) setTabOpen(false);
  }, [subPageOpen]);
  useEffect(() => {
    if (tabOpen) setSubPageOpen(false);
  }, [tabOpen]);
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
            <div className={styles.category}>
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
                className={`${styles.nowTabWrap} ${
                  tabOpen ? styles.isOpen : ''
                }`}
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
            </div>
            <div className={styles.shadow}></div>
          </nav>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentArea}>
          {title == '펀드운용' && (
            <ul className={styles.fund}>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <h2>아이스퀘어 ESG 제1호 조합</h2>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
            </ul>
          )}
          {title == '투자현황' && (
            <ul className={styles.invest}>
              <li>
                <img
                  src={
                    'https://www.sungeelht.com/theme/102114/kr/assets/img/common/f-logo.svg'
                  }
                  alt="로고"
                />
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <img
                  src={
                    'https://www.sungeelht.com/theme/102114/kr/assets/img/common/f-logo.svg'
                  }
                  alt="로고"
                />
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <img
                  src={
                    'https://www.sungeelht.com/theme/102114/kr/assets/img/common/f-logo.svg'
                  }
                  alt="로고"
                />
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <img
                  src={
                    'https://www.sungeelht.com/theme/102114/kr/assets/img/common/f-logo.svg'
                  }
                  alt="로고"
                />
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <h2>에타일렉트로닉스</h2>
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <h2>에타일렉트로닉스</h2>
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <h2>에타일렉트로닉스</h2>
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <h2>에타일렉트로닉스</h2>
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <h2>에타일렉트로닉스</h2>
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
              <li>
                <h2>에타일렉트로닉스</h2>
                <div className={styles.detailBox}>
                  <h2>(주)성일하이텍</h2>
                  <span>www.sungeelht.com</span>
                </div>
              </li>
            </ul>
          )}
          {title == '펀드 운용 현황' && (
            <ul className={styles.fundNow}>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                  <h3>제1호 벤처투자조합</h3>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                  <h3>제1호 벤처투자조합</h3>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
              <li>
                <div className={styles.head}>
                  <h2>아이스퀘어 ESG 제1호 조합</h2>
                </div>
                <ul className={styles.detail}>
                  <li>결성일 : 2021.10.07</li>
                  <li>청산일 : 2024.10.06</li>
                  <li>펀드규모 : 36억원</li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Portfolio;
