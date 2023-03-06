import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode } from 'swiper';
import 'swiper/css';
import styles from './Main.module.scss';
import First from '../../components/MainSlides/First/First';
import Second from '../../components/MainSlides/Second/Second';
import Third from '../../components/MainSlides/Third/Third';
import Fourth from '../../components/MainSlides/Fourth/Fourth';
import { useState } from 'react';
import Fifth from '../../components/MainSlides/Fifth/Fifth';
function Main() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.paginationWrap}>
        <ul>
          <li className={activeIdx == 0 ? styles.hit : ''}>
            <div className={styles.circle}></div>
            <span>Main</span>
          </li>
          <li className={activeIdx == 1 ? styles.hit : ''}>
            <div className={styles.circle}></div>
            <span>About</span>
          </li>
          <li className={activeIdx == 2 ? styles.hit : ''}>
            <div className={styles.circle}></div>
            <span>Portfolio</span>
          </li>
          <li className={activeIdx == 3 ? styles.hit : ''}>
            <div className={styles.circle}></div>
            <span>IR</span>
          </li>
        </ul>
      </div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        speed={1500}
        spaceBetween={0}
        mousewheel={{
          thresholdDelta: 30,
        }}
        freeMode={true}
        modules={[Mousewheel, FreeMode]}
        breakpoints={{
          800: {
            freeMode: false,
          },
        }}
        touchRatio={0}
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
      </Swiper>
    </div>
  );
}
export default Main;
