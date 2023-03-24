import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Board.module.scss';
import arrowBlue from '../../assets/arrowBlue.png';
import arrowBlack from '../../assets/arrowBlack.png';
import IRBanner from '../../components/IRBanner/IRBanner';
import Footer from '../../components/Footer/Footer';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import axiosClient from '../../libs/axiosClient';
import Spinner from '../../components/Spinner/Spinner';

interface ICurrentBoardType {
  attached_files: [];
  content: string;
  created_at: string;
  id: number;
  is_notice: number;
  is_secret: number;
  title: string;
  type: string;
  updated_at: string;
}
interface IOtherBoardType {
  content: string;
  created_at: string;
  id: number;
  is_notice: number;
  is_secret: number;
  title: string;
  type: string;
  updated_at: string;
}
function Board() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
  const [currentBoard, setCurrentBoard] = useState<ICurrentBoardType | null>();
  const [prevBoard, setPrevBoard] = useState<IOtherBoardType | null>();
  const [nextBoard, setNextBoard] = useState<IOtherBoardType | null>();
  useEffect(() => {
    let tab = new URL(document.URL).searchParams.get('tab') || '0';
    if (!tab || tab == '0') setTitle('소식알림');
    else if (tab == '1') setTitle('홍보자료');
  }, [location]);
  useEffect(() => {
    if (subPageOpen) setTabOpen(false);
  }, [subPageOpen]);
  useEffect(() => {
    if (tabOpen) setSubPageOpen(false);
  }, [tabOpen]);
  const [tab, setTab] = useState<number>();
  useEffect(() => {
    setCurrentBoard(null);
    let boardType = new URL(document.URL).searchParams.get('tab') || '0';
    setTab(Number(boardType));
    const id = new URL(document.URL).searchParams.get('id');
    if (boardType == '0') boardType = 'post-detail';
    else boardType = 'advertise-detail';
    axiosClient.get(`/api/${boardType}?id=${id}`).then((res) => {
      setCurrentBoard(res.data.current);
      setPrevBoard(res.data.prev);
      setNextBoard(res.data.next);
    });
  }, [location]);
  return (
    <div className={styles.container}>
      <IRBanner />
      <section className={styles.content}>
        <div className={styles.contentArea}>
          {currentBoard ? (
            <>
              <div className={styles.boardWrap}>
                <h2 className={styles.title}>{currentBoard?.title}</h2>
                <div className={styles.boardInfo}>
                  <span>
                    {currentBoard?.created_at
                      .substring(0, 10)
                      .replaceAll('-', '.')}
                  </span>
                  {/* <span>hit : 861</span> */}
                </div>
                <p
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                    __html: currentBoard?.content || '',
                  }}
                ></p>
              </div>
              <div className={styles.otherBoard}>
                <div
                  className={styles.before}
                  onClick={() => {
                    if (prevBoard)
                      navigate(`/board?tab=${tab}&id=${prevBoard?.id}`);
                  }}
                >
                  <Arrow />
                  <div className={styles.detail}>
                    <span>이전</span>
                    <h3>{prevBoard?.title || '이전 글이 없습니다.'}</h3>
                  </div>
                </div>
                <div className={styles.return}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div
                  className={styles.after}
                  onClick={() => {
                    if (nextBoard)
                      navigate(`/board?tab=${tab}&id=${nextBoard?.id}`);
                  }}
                >
                  <div className={styles.detail}>
                    <span>다음</span>
                    <h3>{nextBoard?.title || '다음 글이 없습니다.'}</h3>
                  </div>
                  <Arrow />
                </div>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Board;
