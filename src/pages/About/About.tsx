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
import { useTranslation } from 'react-i18next';
import investmentField01 from '../../assets/about/investmentField01.png';
import investmentField02 from '../../assets/about/investmentField02.png';
import investmentField03 from '../../assets/about/investmentField03.png';
import map from '../../assets/about/map.png';
import pin from '../../assets/about/pin.png';
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
  const [ref7, inView7] = useInView();
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <div
          className={`${styles.contentArea} ${inView ? styles.isShowing : ''}`}
        >
          <span>ABOUT</span>
          <h1>{t('about.section1.1')}</h1>
          <p>{t('about.section1.2')}</p>
        </div>
        <div ref={ref} className={styles.observer}></div>
      </section>
      <section className={styles.section2}>
        <div
          className={`${styles.contentArea} ${inView2 ? styles.isShowing : ''}`}
        >
          <div className={styles.left}>
            <span>{t('about.section2.1')}</span>
            <p
              className={styles.greetingWrap}
              dangerouslySetInnerHTML={{ __html: t('about.section2.2') }}
            ></p>
            <div className={styles.chairmanInfo}>
              <span>{t('about.section2.position')}</span>
              <span
                style={{ letterSpacing: i18n.language == 'en' ? '0' : '0.6em' }}
              >
                {t('about.section2.name')}
              </span>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
        <div ref={ref2} className={styles.observer}></div>
      </section>
      {/* <section className={styles.section3}>
        <div
          className={`${styles.contentArea} ${inView3 ? styles.isShowing : ''}`}
        >
          <h4>ECOPRO PARTNERS</h4>
          <ul>
            <li>
              <span>01</span>
              <p>{t('about.section3.1')}</p>
            </li>
            <li>
              <span>02</span>
              <p>{t('about.section3.2')}</p>
            </li>
            <li>
              <span>03</span>
              <p>{t('about.section3.3')}</p>
            </li>
          </ul>
        </div>
        <div ref={ref3} className={styles.observer}></div>
      </section> */}
      <section className={styles.section4}>
        <div
          className={`${styles.contentArea} ${inView4 ? styles.isShowing : ''}`}
        >
          <div className={styles.left}>
            <p>{t('about.section4.1')}</p>
          </div>
          <div className={styles.right}>
            <h4>{t('about.section4.2')}</h4>
            <ul>
              <li>
                <span className={styles.title}>{t('about.section4.3')}</span>
                <div>
                  <span>{t('about.section4.4')}</span>
                </div>
              </li>
              {/* <li>
                <span className={styles.title}>{t('about.section4.5')}</span>
                <div>
                  <span>{t('about.section4.6')}</span>
                </div>
              </li> */}
              <li>
                <span className={styles.title}>{t('about.section4.7')}</span>
                <div>
                  <span>{t('about.section4.8')}</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>{t('about.section4.9')}</span>
                <div>
                  <span>{t('about.section4.10')}</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>{t('about.section4.11')}</span>
                <div>
                  <span>{t('about.section4.12')}</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>{t('about.section4.13')}</span>
                <div>
                  <span>{t('about.section4.14')}</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>{t('about.section4.15')}</span>
                <div>
                  <span>{t('about.section4.16')}</span>
                  <span>{t('about.section4.17')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div ref={ref4} className={styles.observer}></div>
      </section>
      <section className={styles.section5}>
        <div
          className={`${styles.contentArea} ${inView5 ? styles.isShowing : ''}`}
        >
          <h1>{t('about.section5.1')}</h1>
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
                              <li key={history.title}>
                                ·{' '}
                                {i18n.resolvedLanguage == 'ko'
                                  ? history.title
                                  : history.english_title}
                              </li>
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
      {/* <section className={styles.section6}>
        <div
          className={`${styles.contentArea} ${styles.philosophy} ${
            inView6 ? styles.isShowing : ''
          }`}
        >
          <h2>{t('about.section6.1')}</h2>
          <p>{t('about.section6.2')}</p>
        </div>
        <div ref={ref6} className={styles.observer}></div>
      </section> */}
      <section className={styles.section7}>
        <div
          className={`${styles.contentArea} ${inView7 ? styles.isShowing : ''}`}
        >
          <h4>{t('about.section7.1')}</h4>
          <p>{t('about.section7.2')}</p>
          {/* <table>
            <th>{t('about.section7.3')}</th>
            <th>{t('about.section7.4')}</th>
            <th>{t('about.section7.5')}</th>
            <tr className={styles.row1}>
              <td rowSpan={3}>{t('about.section7.6')}</td>
              <td>{t('about.section7.7')}</td>
              <td>
                <ul>
                  <li>✓ {t('about.section7.10')}</li>
                  <li>✓ {t('about.section7.11')}</li>
                  <li>✓ {t('about.section7.12')}</li>
                  <li>✓ {t('about.section7.13')}</li>
                  <li>✓ {t('about.section7.14')}</li>
                </ul>
              </td>
            </tr>
            <tr className={styles.row2}>
              <td>{t('about.section7.8')}</td>
              <td>
                <ul>
                  <li>✓ {t('about.section7.15')}</li>
                  <li>✓ {t('about.section7.16')}</li>
                  <li>✓ {t('about.section7.17')}</li>
                </ul>
              </td>
            </tr>
            <tr className={styles.row3}>
              <td>{t('about.section7.9')}</td>
              <td>
                <ul>
                  <li>✓ {t('about.section7.18')}</li>
                  <li>✓ {t('about.section7.19')}</li>
                  <li>✓ {t('about.section7.20')}</li>
                  <li>✓ {t('about.section7.21')}</li>
                </ul>
              </td>
            </tr>
          </table> */}
          <Swiper
            className={styles.investmentFieldSlider}
            spaceBetween={19}
            slidesPerView={1.1}
            // autoHeight={true}
            breakpoints={{
              // 425: {
              //   slidesPerView: 2.2,
              // },
              550: {
                slidesPerView: 1.6,
              },
              767: {
                slidesPerView: 2.2,
                spaceBetween: 26,
              },
              1023: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.imageWrap}>
                <img src={investmentField01} />
              </div>
              <div className={styles.detailWrap}>
                <div className={styles.bigCategory}>
                  <span>{t('about.section7.4')}</span>
                  <h4>· {t('about.section7.7')}</h4>
                </div>
                <div className={styles.categoryDetail}>
                  <span>{t('about.section7.5')}</span>
                  <ul>
                    <li>· {t('about.section7.10')}</li>
                    <li>· {t('about.section7.11')}</li>
                    <li>· {t('about.section7.12')}</li>
                    <li>· {t('about.section7.13')}</li>
                    <li>· {t('about.section7.14')}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageWrap}>
                <img src={investmentField02} />
              </div>
              <div className={styles.detailWrap}>
                <div className={styles.bigCategory}>
                  <span>{t('about.section7.4')}</span>
                  <h4>· {t('about.section7.8')}</h4>
                </div>
                <div className={styles.categoryDetail}>
                  <span>{t('about.section7.5')}</span>
                  <ul>
                    <li>· {t('about.section7.15')}</li>
                    <li>· {t('about.section7.16')}</li>
                    <li>· {t('about.section7.17')}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.imageWrap}>
                <img src={investmentField03} />
              </div>
              <div className={styles.detailWrap}>
                <div className={styles.bigCategory}>
                  <span>{t('about.section7.4')}</span>
                  <h4>· {t('about.section7.9')}</h4>
                </div>
                <div className={styles.categoryDetail}>
                  <span>{t('about.section7.5')}</span>
                  <ul>
                    <li>· {t('about.section7.18')}</li>
                    <li>· {t('about.section7.19')}</li>
                    <li>· {t('about.section7.20')}</li>
                    <li>· {t('about.section7.21')}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div ref={ref7} className={styles.observer}></div>
      </section>
      <section className={styles.section8}>
        <div className={styles.contentArea}>
          <h3>{t('about.section8.1')}</h3>
          {/* <img src={map} alt="에코프로파트너스 지도" className={styles.map} /> */}
          <ul className={styles.companyInfoList}>
            <li>
              <span>{t('about.section8.2')}</span>
              <span>06775</span>
            </li>
            <li>
              <span>{t('about.section8.3')}</span>
              <span>02-6920-6500</span>
            </li>
            <li>
              <span>{t('about.section8.4')}</span>
              <span>02-6920-6599</span>
            </li>
            <li>
              <span>{t('about.section8.5')}</span>
              <span>partners@ecopro-partners.com</span>
            </li>
          </ul>
          <h5>
            <img src={pin} />
            <span>{t('about.section8.6')}</span>
          </h5>
          <h5>
            <img src={pin} />
            <span>{t('about.section8.7')}</span>
          </h5>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default About;
