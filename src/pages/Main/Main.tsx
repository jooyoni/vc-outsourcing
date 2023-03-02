import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';
import 'swiper/css';

import styles from './Main.module.scss';
import First from '../../components/MainSlides/First/First';
import Second from '../../components/MainSlides/Second/Second';
import Third from '../../components/MainSlides/Third/Third';
import Fourth from '../../components/MainSlides/Fourth/Fourth';
function Main() {
  return (
    <div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        speed={1500}
        spaceBetween={0}
        mousewheel={{
          thresholdDelta: 30,
        }}
        modules={[Mousewheel]}
        allowTouchMove={true}
        className={styles.mainSlider}
      >
        <SwiperSlide style={{ backgroundColor: 'blue' }}>
          <First />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Second />
        </SwiperSlide>
        <SwiperSlide>
          <Third />
        </SwiperSlide> */}
        <SwiperSlide>
          <Fourth />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Main;
