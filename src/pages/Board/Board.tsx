import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Board.module.scss';
import arrowBlue from '../../assets/arrowBlue.png';
import arrowBlack from '../../assets/arrowBlack.png';
import IRBanner from '../../components/IRBanner/IRBanner';
import Footer from '../../components/Footer/Footer';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

function Board() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [subPageOpen, setSubPageOpen] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);
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

  return (
    <div className={styles.container}>
      <IRBanner />
      <section className={styles.content}>
        <div className={styles.contentArea}>
          <div className={styles.boardWrap}>
            <h2 className={styles.title}>이곳은 제목</h2>
            <div className={styles.boardInfo}>
              <span>2023.03.16</span>
              <span>hit : 861</span>
            </div>
            <p
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: `기부금품 모집 및 사용에 관한 법률 시행령 제19조에 따라 기부금품 모집 및 사용내역을 아래와 같이 공개합니다.
1.모집자: 사회복지법인 한국노인복지회(등록번호 제2022-78호)
2. 모집목적: 국내 저소득 노인지원 사업을 위한 기금 마련
3. 모집기간: 2022년 6월 1일~2022년 12월 31일
4. 모집등록금액: 71,000,000원
5. 모집금품의 총액 및 수량: 35,392,792원(모집등록금액 대비 50%)
가. 현금: 35,391,000원(온라인 모금)
나. 물품: 0원
다.기타수입: 1,792원
6. 기부금품의 사용명세`,
              }}
            ></p>
          </div>
          <div className={styles.otherBoard}>
            <div className={styles.before}>
              <Arrow />
              <div className={styles.detail}>
                <span>이전</span>
                <h3>코스닥 시장 공모 안내</h3>
              </div>
            </div>
            <div className={styles.return}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.after}>
              <div className={styles.detail}>
                <span>다음</span>
                <h3>다음 글이 없습니다.</h3>
              </div>
              <Arrow />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Board;
