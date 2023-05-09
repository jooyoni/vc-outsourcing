import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode } from 'swiper';
import 'swiper/css';
import styles from './Main.module.scss';
import First from '../../components/MainSlides/First/First';
import Second from '../../components/MainSlides/Second/Second';
import Third from '../../components/MainSlides/Third/Third';
import Fourth from '../../components/MainSlides/Fourth/Fourth';
import { useEffect, useState } from 'react';
import Fifth from '../../components/MainSlides/Fifth/Fifth';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';
function Main() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFullpage, setIsFullpage] = useState(0); //1이면 풀페이지 2는 일반
  const [modalType, setModalType] = useState(0); // 푸터 메뉴 관련 모달  0:닫힘 1:스튜어드십 2: 개인정보처리방침 3:고객정보 취급방침, 4:사이버신고센터
  function pageHandler(e: UIEvent) {
    let target = e.currentTarget as Window;
    if (target.innerWidth > 767) setIsFullpage(1);
    else setIsFullpage(2);
  }
  useEffect(() => {
    window.addEventListener('resize', (e) => pageHandler(e));
    return () => {
      window.removeEventListener('resize', (e) => pageHandler(e));
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth > 767) setIsFullpage(1);
    else setIsFullpage(2);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.paginationWrap}>
        <ul>
          <li className={activeIdx == 0 ? styles.hit : ''}>
            <div className={styles.circle}></div>
            <span>01</span>
          </li>
          <li className={`${activeIdx == 1 ? styles.hit : ''} ${styles.dark}`}>
            <div className={styles.circle}></div>
            <span>02</span>
          </li>
          <li className={activeIdx == 2 ? styles.hit : ''}>
            <div className={styles.circle}></div>
            <span>03</span>
          </li>
          <li className={activeIdx >= 3 ? styles.hit : ''}>
            <div className={styles.circle}></div>
            <span>04</span>
          </li>
        </ul>
      </div>
      {isFullpage == 1 && (
        <Swiper
          direction={'vertical'}
          slidesPerView={'auto'}
          speed={1000}
          spaceBetween={0}
          mousewheel={{
            thresholdDelta: 30,
          }}
          threshold={10}
          // shortSwipes={false}
          // longSwipesMs={100}
          // longSwipesRatio={0.3}
          // shortSwipes={false}
          // longSwipes={true}
          // longSwipesRatio={0}

          freeMode={false}
          modules={[Mousewheel, FreeMode]}
          // breakpoints={{
          //   767: {
          //     freeMode: false,
          //   },
          // }}
          // touchRatio={0.01}
          onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}
          allowTouchMove={true}
          className={styles.mainSlider}
        >
          <SwiperSlide>
            <First />
          </SwiperSlide>
          <SwiperSlide>
            <Second />
          </SwiperSlide>
          <SwiperSlide>
            <Third />
          </SwiperSlide>
          <SwiperSlide>
            <Fourth />
          </SwiperSlide>
          <SwiperSlide>
            <Fifth />
          </SwiperSlide>
          <SwiperSlide style={{ height: 'auto', minHeight: 'unset' }}>
            <Footer />
          </SwiperSlide>
        </Swiper>
      )}
      {isFullpage == 2 && (
        <div className={styles.scrollPage}>
          <First />
          <Second />
          <Third />
          <Fourth />
          <Fifth />
          <Footer />
        </div>
      )}
    </div>
  );
}
export default Main;
