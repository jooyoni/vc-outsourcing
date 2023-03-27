import styles from './About.module.scss';
import Footer from '../../components/Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import axiosClient from '../../libs/axiosClient';
import arrow from '../../assets/arrowWhite.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import SwiperCore from 'swiper';
import { useInView } from 'react-intersection-observer';
interface ICompanyHistoryType {
  english_title: string;
  m: number;
  title: string;
  y: number;
}
function About() {
  const [companyHistory, setCompanyHistory] = useState<ICompanyHistoryType[]>(
    [],
  );
  const [historyYear, setHistoryYear] = useState<number[]>([]);
  useEffect(() => {
    axiosClient
      .get('/api/company_history')
      .then((res) => setCompanyHistory(res.data));
  }, []);
  useEffect(() => {
    if (!companyHistory) return;
    let list: number[] = [];
    companyHistory.reverse().map((history) => {
      if (!list.includes(history.y)) list.push(history.y);
    });
    setHistoryYear(list);
  }, [companyHistory]);
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [prevBtnShowing, setPrevBtnShowing] = useState(false);
  const [nextBtnShowing, setNextBtnShowing] = useState(true);
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  return (
    <div className={styles.container}>
      <section>
        <div
          className={`${styles.contentArea} ${inView ? styles.isShowing : ''}`}
        >
          <span>ABOUT</span>
          <h1>아이스퀘어벤처스</h1>
          <p>
            아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로 지속가능한
            기업생태계 구축을 위해 환경 및 전지재료 사업 기업인 ㈜에코프로가
            설립한 중소기업창업투자회사입니다.
          </p>
        </div>
        <div ref={ref} className={styles.observer}></div>
      </section>
      <section>
        <div
          className={`${styles.contentArea} ${inView2 ? styles.isShowing : ''}`}
        >
          <div className={styles.left}>
            <span>CEO 인사말</span>
            <p className={styles.greetingWrap}>
              안녕하십니까?
              <br />
              ㈜에코프로 파트너스 대표이사 이재훈입니다.
              <br />
              <br />
              우리 회사는 ‘20년 7월 설립된 신생 투자회사로 투자와 보육이라는
              핵심 목표를 가지고 기업과의 상생을 위해 장기적인 안목으로
              “가까이에서, 그리고 빈번히 상호작용”하도록 지원 하겠습니다. 이를
              위해 유망 기술기업이 겪는 다양한 경영 등 애로사항을 해결 할 수
              있도록 투자지원 뿐만 아니라 보육서비스도 병행해서 지원할
              계획입니다.
              <br />
              <br />
              또한, 에코프로 가족회사의 일원으로서 모기업이 추구하는 “인류의
              삶의 질을 개선하고 편리하게 한다.”는 철학에 따라 우리 사회
              대기환경 및 친환경에너지 등 관련 유망한 기술 기업에 투자할
              예정입니다.
              <br />
              <br />
              신생 투자회사 이지만 지속적인 성장과 사회 기여를 통해 신뢰받는
              투자회사로 성장할 수 있도록 하겠습니다. 감사합니다.
            </p>
            <div className={styles.chairmanInfo}>
              <span>아이스퀘어 대표이사</span>
              <span>이재훈</span>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
        <div ref={ref2} className={styles.observer}></div>
      </section>
      <section>
        <div
          className={`${styles.contentArea} ${inView3 ? styles.isShowing : ''}`}
        >
          <h4>ECOPRO PARTNER</h4>
          <ul>
            <li>
              <span>01</span>
              <p>환경 & 에너지 분야 특화 VC</p>
            </li>
            <li>
              <span>02</span>
              <p>가까이에서 빈번히 상호작용하는 동반성장 지향형 VC</p>
            </li>
            <li>
              <span>03</span>
              <p>기업가 정신을 지속하고 꿈을 실현 하도록 돕는 조력자</p>
            </li>
          </ul>
        </div>
        <div ref={ref3} className={styles.observer}></div>
      </section>
      <section>
        <div
          className={`${styles.contentArea} ${inView4 ? styles.isShowing : ''}`}
        >
          <div className={styles.left}>
            <p>
              아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로 지속가능한
              기업생태계 구축을 위해 환경 및 전지재료 사업 기업인 ㈜에코프로가
              설립한 중소기업창업투자회사입니다.
            </p>
          </div>
          <div className={styles.right}>
            <h4>회사개요</h4>
            <ul>
              <li>
                <span className={styles.title}>회사명</span>
                <div>
                  <span>아이스퀘어벤처스</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>최대주주</span>
                <div>
                  <span>주식회사 에코프로 (KOSDAQ 상장)</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>자본금</span>
                <div>
                  <span>50억원</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>설립일</span>
                <div>
                  <span>2020년 7월 20일</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>창업투자회사 등록일</span>
                <div>
                  <span>2020년 8월 25일</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>업종</span>
                <div>
                  <span>중소기업창업투자회사, 사업경영 및 관리 자문</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>소재지</span>
                <div>
                  <span>
                    (본 사) 충북 청주시 청원구 오창읍 각리1길 97 충북SW융합센터
                    405호
                  </span>
                  <span>(사무소) 서울시 강남구 테헤란로 314 금성빌딩 12층</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div ref={ref4} className={styles.observer}></div>
      </section>
      <section>
        <div
          className={`${styles.contentArea} ${inView5 ? styles.isShowing : ''}`}
        >
          <h1>아이스퀘어가 걸어온 길</h1>
          <div className={styles.btnsWrap}>
            {
              <div
                className={`${styles.prevBtn} ${
                  prevBtnShowing ? styles.hit : ''
                }`}
                onClick={() => swiper?.slidePrev()}
              >
                <img src={arrow} />
              </div>
            }
            <div
              className={`${styles.nextBtn} ${
                nextBtnShowing ? styles.hit : ''
              }`}
              onClick={() => swiper?.slideNext()}
            >
              <img src={arrow} />
            </div>
          </div>
          <Swiper
            className={styles.historySlider}
            slidesPerView={'auto'}
            freeMode={true}
            modules={[FreeMode]}
            onSwiper={setSwiper}
            onSlideChangeTransitionEnd={(swiper: any) => {
              if (!(swiper.translate * -1 + swiper.width >= swiper.virtualSize))
                setNextBtnShowing(true);
              else setNextBtnShowing(false);
              if (swiper.translate < 0) setPrevBtnShowing(true);
              else setPrevBtnShowing(false);
            }}
            onTransitionEnd={(swiper: any) => {
              if (!(swiper.translate * -1 + swiper.width >= swiper.virtualSize))
                setNextBtnShowing(true);
              else setNextBtnShowing(false);
              if (swiper.translate < 0) setPrevBtnShowing(true);
              else setPrevBtnShowing(false);
            }}
          >
            {historyYear.map((year) => (
              <SwiperSlide key={year}>
                <div className={styles.slideWrap}>
                  <h2
                    className={`${styles.year} ${
                      new Date().getFullYear() == year ? styles.hit : ''
                    }`}
                  >
                    {year}
                  </h2>
                  <ul>
                    {(() => {
                      let monthList: number[] = [];
                      companyHistory
                        .filter((history) => history.y == year)
                        .map((history) => {
                          if (!monthList.includes(history.m))
                            monthList.push(history.m);
                        });
                      return monthList;
                    })().map((month) => (
                      <li key={month}>
                        <span className={styles.month}>{month}</span>
                        <ul>
                          {companyHistory
                            .filter(
                              (history) =>
                                history.y == year && history.m == month,
                            )
                            .map((history) => (
                              <li>· {history.title}</li>
                            ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div ref={ref5} className={styles.observer}></div>
      </section>
      <section>
        <div
          className={`${styles.contentArea} ${inView6 ? styles.isShowing : ''}`}
        >
          <h4>주요 투자대상</h4>
          <p>
            초기단계 기업 투자지원경험과 에코프로 그룹의 환경 및 이차전지 분야
            네트워크를 바탕으로 환경에너지 분야의 기술력 기반 기업을 집중적으로
            발굴투자하고자 합니다.
          </p>
          <table>
            <th>투자이념</th>
            <th>중점 투자분야</th>
            <th>세부 투자분야</th>
            <tr className={styles.row1}>
              <td rowSpan={3}>
                혁신적인 방법으로 인류의 삶을 윤택하게 만드는 기업
              </td>
              <td>환경</td>
              <td>
                <ul>
                  <li>✓ 유해가스 제거</li>
                  <li>✓ 온실가스 제거</li>
                  <li>✓ 대기오염 방지</li>
                  <li>✓ 스마트 그린산단</li>
                  <li>✓ 폐기물 처리</li>
                </ul>
              </td>
            </tr>
            <tr className={styles.row2}>
              <td>에너지</td>
              <td>
                <ul>
                  <li>✓ 이차전지</li>
                  <li>✓ 친환경 스마트 모빌리티</li>
                  <li>✓ 신재생 에너지</li>
                </ul>
              </td>
            </tr>
            <tr className={styles.row3}>
              <td>기타</td>
              <td>
                <ul>
                  <li>✓ 소재</li>
                  <li>✓ 인공지능</li>
                  <li>✓ 데이터</li>
                  <li>✓ 바이오</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div ref={ref6} className={styles.observer}></div>
      </section>
      <Footer />
    </div>
  );
}
export default About;
