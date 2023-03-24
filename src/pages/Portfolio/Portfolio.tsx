import Footer from '../../components/Footer/Footer';
import styles from './Portfolio.module.scss';
import home from '../../assets/home.png';
import arrow from '../../assets/arrowBottom.png';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosClient from '../../libs/axiosClient';
import Spinner from '../../components/Spinner/Spinner';
import { useInView } from 'react-intersection-observer';
interface IFundDataType {
  admin_user_id: null | number;
  category_id: number;
  created_at: string;
  end_at: string;
  english_title: string;
  fund_size: number;
  id: number;
  sort_order: number;
  start_at: string;
  status: number;
  title: string;
  updated_at: string;
}
interface IInvestDataType {
  category_id: number;
  created_at: string;
  description: string;
  english_name: string;
  id: number;
  logo_image: string;
  name: string;
  region_id: number;
  sort_order: number;
  status: number;
  type: number;
  updated_at: string;
  url: string;
}
function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
  //페이지네이션 관련 상태
  const [pagination, setPagination] = useState(1);
  const [paginationList, setPaginationList] = useState<number[]>([]);
  //페이지네이션 관련 상태
  useEffect(() => {
    let tab = new URL(document.URL).searchParams.get('tab');
    if (!tab || tab == '0') {
      setTitle('펀드운용');
    } else if (tab == '1') {
      setTitle('투자현황');
    } else if (tab == '2') {
      setTitle('esg 투자 실천');
    }
  }, [location]);
  useEffect(() => {
    if (!title) return;
    setPaginationList([]);
  }, [title]);
  useEffect(() => {
    if (subPageOpen) setTabOpen(false);
  }, [subPageOpen]);
  useEffect(() => {
    if (tabOpen) setSubPageOpen(false);
  }, [tabOpen]);

  const [investData, setInvestData] = useState<IInvestDataType[]>([]);
  const [fundData, setFundData] = useState<IFundDataType[]>([]);
  useEffect(() => {
    setInvestData([]);
    setFundData([]);
    let tab = new URL(document.URL).searchParams.get('tab');
    let page = Number(new URL(document.URL).searchParams.get('page') || 1);
    setPagination(page);
    if (!tab || tab == '0') tab = 'fund';
    else if (tab == '1') tab = 'portfolio';
    axiosClient.get(`/api/${tab}?page=${page}&perpage=12`).then((res) => {
      let page = Number(new URL(document.URL).searchParams.get('page') || 1);
      let paginationList: number[] = [];
      if (tab == 'portfolio') {
        setFundData([]);
        setInvestData(res.data.data);
      } else if (tab == 'fund') {
        setInvestData([]);
        setFundData(res.data.data);
      }
      let last =
        Math.floor(res.data.total / 12) + (res.data.total % 12 > 0 ? 1 : 0);
      if (last <= 5 || page < 3) {
        //5페이지 미만시 1~마지막 페이지까지
        for (let i = 1; i <= (5 < last ? 5 : last); i++) paginationList.push(i);
      } else {
        if (last - 2 > page)
          paginationList = [page - 2, page - 1, page, page + 1, page + 2];
        else paginationList = [last - 4, last - 3, last - 2, last - 1, last];
      }
      setPagination(
        Number(new URL(document.URL).searchParams.get('page') || 1),
      );
      setPaginationList(paginationList);
    });
  }, [location]);
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div
          className={`${styles.contentArea} ${inView1 ? styles.isShowing : ''}`}
        >
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
                  {/* <li onClick={() => navigate('/portfolio?tab=3')}>
                    펀드 운용 현황
                  </li> */}
                </ul>
              </div>
            </div>
            <div className={styles.shadow}></div>
          </nav>
        </div>
        <div ref={ref1} className={styles.observer}></div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentArea}>
          {title == '펀드운용' && (
            <ul
              className={`${styles.fund} ${styles.animationList} ${
                inView2 ? styles.isShowing : ''
              }`}
            >
              {fundData.length ? (
                <>
                  {fundData.map((fund, idx) => (
                    <li
                      key={fund.id}
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <h2>{fund.title}</h2>
                      <ul className={styles.detail}>
                        <li>
                          결성일 :{' '}
                          {fund.start_at.substring(0, 10).replaceAll('-', '.')}
                        </li>
                        <li>
                          청산일 :{' '}
                          {fund.end_at.substring(0, 10).replaceAll('-', '.')}
                        </li>
                        <li>펀드규모 : {fund.fund_size}억원</li>
                      </ul>
                    </li>
                  ))}
                  <div ref={ref2} className={styles.observer}></div>
                </>
              ) : (
                <Spinner />
              )}
            </ul>
          )}
          {title == '투자현황' && (
            <ul
              className={`${styles.invest} ${styles.animationList} ${
                inView2 ? styles.isShowing : ''
              }`}
            >
              {investData.length ? (
                <>
                  {investData.map((invest, idx) => (
                    <li
                      key={invest.id}
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <img src={invest.logo_image} alt="로고" />
                      <div className={styles.detailBox}>
                        <h2>{invest.name}</h2>
                        <span>{invest.url}</span>
                      </div>
                    </li>
                  ))}
                  <div ref={ref2} className={styles.observer}></div>
                </>
              ) : (
                <Spinner />
              )}
            </ul>
          )}
        </div>
        <ul className={styles.paginationList}>
          {paginationList.map((number, idx, arr) => (
            <li
              key={number}
              className={`${number == pagination ? styles.hit : ''} ${
                arr.length == 1 ? styles.onePage : ''
              }`}
              onClick={() =>
                navigate(
                  `/portfolio?tab=${
                    new URL(document.URL).searchParams.get('tab') || 0
                  }&page=${number}`,
                )
              }
            >
              <span>{number}</span>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}
export default Portfolio;
