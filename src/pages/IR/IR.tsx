import home from '../../assets/home.png';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './IR.module.scss';
import arrow from '../../assets/arrowBottom.png';
import arrowBlack from '../../assets/arrowBottomBlack.png';
import search from '../../assets/search.png';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import IRBanner from '../../components/IRBanner/IRBanner';
import axiosClient from '../../libs/axiosClient';
interface IBoardType {
  content: string;
  created_at: string;
  id: number;
  is_notice: number;
  is_secret: number;
  title: string;
  type: string;
  updated_at: string;
}
const limit = 7;
function IR() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
  //페이지네이션 관련 상태
  const [pagination, setPagination] = useState(1);
  const [paginationList, setPaginationList] = useState<number[]>([]);
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
  const [boardData, setBoardData] = useState<IBoardType[]>([]);
  useEffect(() => {
    let tab = new URL(document.URL).searchParams.get('tab');
    let page = Number(new URL(document.URL).searchParams.get('page') || 1);
    if (!tab || tab == '0') tab = 'post';
    else if (tab == '1') tab = 'advertise';
    axiosClient.get(`/api/${tab}?page=${page}&perpage=${limit}`).then((res) => {
      let page = Number(new URL(document.URL).searchParams.get('page') || 1);
      let paginationList: number[] = [];
      setBoardData(res.data.data);
      let last =
        Math.floor(res.data.total / limit) +
        (res.data.total % limit > 0 ? 1 : 0);
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
            {boardData.map((data, idx) => (
              <li key={data.id} onClick={() => navigate('/board')}>
                <span className={styles.order}>
                  {limit * (pagination - 1) + idx + 1}
                </span>
                <div className={styles.boardDetailWrap}>
                  <h3 className={styles.title}>{data.title}</h3>
                  <div className={styles.boardInfo}>
                    <span>
                      {data.created_at.substring(0, 10).replaceAll('-', '.')}
                    </span>
                    {/* <span>hit : {data.}</span> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className={styles.paginationList}>
            {paginationList.map((number, idx, arr) => (
              <li
                key={number}
                className={`${number == pagination ? styles.hit : ''} ${
                  arr.length == 1 ? styles.onePage : ''
                }`}
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
