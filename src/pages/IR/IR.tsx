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
import { useInView } from 'react-intersection-observer';
import Spinner from '../../components/Spinner/Spinner';
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
  const [tab, setTab] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  function handlePagination(page: number) {
    let tab = new URL(document.URL).searchParams.get('tab') || '0';
    navigate(`/ir?tab=${tab}&page=${page}`);
  }
  //페이지네이션 관련 상태

  useEffect(() => {
    if (subPageOpen) setTabOpen(false);
  }, [subPageOpen]);
  useEffect(() => {
    if (tabOpen) setSubPageOpen(false);
  }, [tabOpen]);
  const [boardData, setBoardData] = useState<IBoardType[]>([]);
  useEffect(() => {
    let tab = new URL(document.URL).searchParams.get('tab');
    setTab(Number(tab || 0));
    let keyword = new URL(document.URL).searchParams.get('keyword') || '';
    setKeyword(keyword);
    let search = new URL(document.URL).searchParams.get('search') || 'title';
    setSearchOption(search);
  }, [location]);
  useEffect(() => {
    setBoardData([]);
  }, [location]);
  useEffect(() => {
    setIsLoading(true);
    let tab = new URL(document.URL).searchParams.get('tab');
    let page = Number(new URL(document.URL).searchParams.get('page') || 1);
    let keyword = new URL(document.URL).searchParams.get('keyword') || '';
    let search = new URL(document.URL).searchParams.get('search') || 'title';
    setPagination(page);
    if (!tab || tab == '0') tab = 'post';
    else if (tab == '1') tab = 'advertise';
    axiosClient
      .get(
        `/api/${tab}?page=${page}&perpage=${limit}&search=${search}&keyword=${keyword}`,
      )
      .then((res) => {
        let page = Number(new URL(document.URL).searchParams.get('page') || 1);
        let paginationList: number[] = [];
        let last =
          Math.floor(res.data.total / limit) +
          (res.data.total % limit > 0 ? 1 : 0);
        if (last <= 5 || page < 3) {
          //5페이지 미만시 1~마지막 페이지까지
          for (let i = 1; i <= (5 < last ? 5 : last); i++)
            paginationList.push(i);
        } else {
          if (last - 2 > page)
            paginationList = [page - 2, page - 1, page, page + 1, page + 2];
          else paginationList = [last - 4, last - 3, last - 2, last - 1, last];
        }

        setBoardData(res.data.data);
        setPagination(
          Number(new URL(document.URL).searchParams.get('page') || 1),
        );
        setPaginationList(paginationList);
        setIsLoading(false);
      });
  }, [location]);
  const [ref1, inView1] = useInView();

  //게시판 검색 관련 상태
  const [searchOption, setSearchOption] = useState('title');
  const [keyword, setKeyword] = useState('');
  function handleSearch() {
    let tab = new URL(document.URL).searchParams.get('tab') || '0';
    let page = 1;
    navigate(
      `/ir?tab=${tab}&page=${page}&search=${searchOption}&keyword=${keyword}`,
    );
  }
  //게시판 검색 관련 상태
  return (
    <div className={styles.container}>
      <IRBanner />
      <section className={styles.content}>
        <div className={styles.contentArea}>
          <div className={styles.formWrap}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div className={styles.searchOption}>
                <select
                  onChange={(e) => setSearchOption(e.currentTarget.value)}
                >
                  <option value="title" selected={searchOption == 'title'}>
                    제목
                  </option>
                  <option value="content" selected={searchOption == 'content'}>
                    내용
                  </option>
                  <option value="all" selected={searchOption == 'all'}>
                    제목 + 내용
                  </option>
                </select>
                <span>
                  {searchOption == 'title'
                    ? '제목'
                    : searchOption == 'content'
                    ? '내용'
                    : searchOption == 'all'
                    ? '제목 + 내용'
                    : ''}
                </span>
                <img src={arrowBlack} />
              </div>
              <div className={styles.inputWrap}>
                <input
                  type="text"
                  placeholder="검색"
                  value={keyword}
                  onChange={(e) => setKeyword(e.currentTarget.value)}
                />
                <img src={search} onClick={handleSearch} />
              </div>
            </form>
          </div>
          <ul
            className={`${styles.searchResultList} ${
              inView1 ? styles.isShowing : ''
            }`}
          >
            {boardData.length || !isLoading ? (
              <>
                {boardData.map((data, idx) => (
                  <li
                    key={data.id}
                    onClick={() =>
                      navigate(
                        `/board?tab=${tab}&id=${data.id}&search=${searchOption}&keyword=${keyword}`,
                      )
                    }
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <span className={styles.order}>
                      {limit * (pagination - 1) + idx + 1}
                    </span>
                    <div className={styles.boardDetailWrap}>
                      <h3 className={styles.title}>{data.title}</h3>
                      <div className={styles.boardInfo}>
                        <span>
                          {data.created_at
                            .substring(0, 10)
                            .replaceAll('-', '.')}
                        </span>
                        {/* <span>hit : {data.}</span> */}
                      </div>
                    </div>
                  </li>
                ))}
                <div ref={ref1} className={styles.observer}></div>
              </>
            ) : (
              <Spinner />
            )}
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
