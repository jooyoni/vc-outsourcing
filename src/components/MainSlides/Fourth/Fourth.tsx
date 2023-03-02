import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FreeMode, Autoplay } from 'swiper';
import SwiperCore from 'swiper';
import styles from './Fourth.module.scss';
import { useEffect, useState } from 'react';
function Fourth() {
  const [swiper, setSwiper] = useState<SwiperCore>();

  return (
    <div>
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={6}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={15000}
        loop={true}
        style={{ paddingTop: '500px' }}
        className={styles.logoSlider}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
          <SwiperSlide key={idx}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={6}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={15000}
        loop={true}
        style={{ paddingTop: '100px' }}
        className={styles.logoSlider}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
          <SwiperSlide key={idx}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Fourth;
