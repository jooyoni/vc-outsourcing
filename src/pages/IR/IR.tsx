import home from '../../assets/home.png';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './IR.module.scss';
import arrow from '../../assets/arrowBottom.png';
import arrowBlack from '../../assets/arrowBottomBlack.png';
import search from '../../assets/search.png';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import IRBanner from '../../components/IRBanner/IRBanner';
const limit = 7;
const imsiSearch = [
  {
    title: '마우스 오버시 백그라운드 색 변경',
    date: new Date().toISOString(),
    hit: 861,
  },
  {
    title: '코스닥시장 상장 공모 안내',
    date: new Date().toISOString(),
    hit: 8261,
  },
  {
    title: '임시주주총회 소집통지공고',
    date: new Date().toISOString(),
    hit: 8261,
  },
  { title: '22기 재무상태표', date: new Date().toISOString(), hit: 8261 },
  { title: '21기 재무상태표', date: new Date().toISOString(), hit: 8261 },
  { title: '신입및경력사원 모집', date: new Date().toISOString(), hit: 8261 },
  {
    title: '스마트 데이터센터 & 스마트 컴퓨팅 컨퍼런스 2014',
    date: new Date().toISOString(),
    hit: 8261,
  },
];
function IR() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
  //페이지네이션 관련 상태
  const [pagination, setPagination] = useState(1);
  const [paginationList, setPaginationList] = useState([1, 2, 3, 4, 5]);
  function handlePagination(page: number) {
    let tab = new URL(document.URL).searchParams.get('tab') || '0';
    navigate(`/ir?tab=${tab}&page=${page}`);
  }
  //페이지네이션 관련 상태
  useEffect(() => {
    let tab = new URL(document.URL).searchParams.get('tab') || '0';
    if (!tab || tab == '0') setTitle('소식알림');
    else if (tab == '1') setTitle('홍보자료');

    let page = new URL(document.URL).searchParams.get('page') || 1;
    page = Number(page);
    setPagination(page);
  }, [location]);
  useEffect(() => {
    if (subPageOpen) setTabOpen(false);
  }, [subPageOpen]);
  useEffect(() => {
    if (tabOpen) setSubPageOpen(false);
  }, [tabOpen]);
  return (
    <div className={styles.container}>
      <IRBanner />
      <section className={styles.content}>
        <div className={styles.contentArea}>
          <div className={styles.formWrap}>
            <form>
              <div className={styles.searchOption}>
                <span>제목</span>
                <img src={arrowBlack} />
              </div>
              <div className={styles.inputWrap}>
                <input type="text" placeholder="검색" />
                <img src={search} />
              </div>
            </form>
          </div>
          <ul className={styles.searchResultList}>
            {imsiSearch.map((data, idx) => (
              <li key={data.title} onClick={() => navigate('/board')}>
                <span className={styles.order}>
                  {limit * (pagination - 1) + idx + 1}
                </span>
                <div className={styles.boardDetailWrap}>
                  <h3 className={styles.title}>{data.title}</h3>
                  <div className={styles.boardInfo}>
                    <span>
                      {data.date.substring(0, 10).replaceAll('-', '.')}
                    </span>
                    <span>hit : {data.hit}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className={styles.paginationList}>
            {paginationList.map((number) => (
              <li
                key={number}
                className={number == pagination ? styles.hit : ''}
                onClick={() => handlePagination(number)}
              >
                <span>{number}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default IR;
