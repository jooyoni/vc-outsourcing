import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FreeMode, Autoplay } from 'swiper';
import SwiperCore from 'swiper';
import styles from './Fourth.module.scss';
import irBg from '../../../assets/background/irBg.png';
import { useEffect, useRef, useState } from 'react';
import arrow from '../../../assets/arrowWhiteThin.png';
const slideData = [
  {
    title: '현재운용자산',
    content: '1조 3,902억 +',
  },
  {
    title: '운용인력',
    content: '40명 +',
  },
  {
    title: '운용인력',
    content: '40명 +',
  },
  {
    title: '운용인력',
    content: '40명 +',
  },
];
function Fourth() {
  const [swiperPC, setSwiperPC] = useState<SwiperCore>();
  const [swiper, setSwiper] = useState<SwiperCore>();
  const intersectRef = useRef<HTMLDivElement>(null);
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    if (!intersectRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsShowing(true);
        } else {
          setIsShowing(false);
        }
      },
      { threshold: isShowing ? 0.2 : 0.5 },
    );
    io.observe(intersectRef.current);
    return () => io.disconnect();
  }, [isShowing]);
  return (
    <>
      <div className={styles.containerWrap}>
        <div
          className={`${styles.container} ${styles.pc} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <div className={styles.left}>
            <div className={styles.contentWrap}>
              <h3>i SQUARE VENTURES</h3>
              <p>
                최고의 전문인력과 차별화된 가치증대 방식으로
                <br />
                대한민국 벤처생태계 육성과
                <br />
                펀드운용 수익이라는 목표를 추진해오고 있습니다.
              </p>
              <div className={styles.btns}>
                <img src={arrow} onClick={() => swiperPC?.slidePrev()} />
                <img src={arrow} onClick={() => swiperPC?.slideNext()} />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img src={irBg} />
            <Swiper
              onSwiper={setSwiperPC}
              className={styles.slider}
              slidesPerView={'auto'}
              spaceBetween={32}
              loop={true}
              speed={1000}
            >
              {slideData.map((data, idx) => (
                <SwiperSlide className={`${styles.slide} slide${idx}`}>
                  <h3>{data.title}</h3>
                  <span>{data.content}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div
          className={`${styles.container} ${styles.mobile} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <img src={irBg} className={styles.bg} />
          <h2>i SQUARE VENTURES</h2>
          <p>
            최고의 전문인력과 차별화된 가치증대 방식으로
            <br />
            대한민국 벤처생태계 육성과
            <br />
            펀드운용 수익이라는 목표를 추진해오고 있습니다.
          </p>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={11}
            className={styles.slider}
            onSwiper={setSwiper}
          >
            {slideData.map((data, idx) => (
              <SwiperSlide
                key={idx}
                className={`${styles.slide} ${'slide' + idx}`}
              >
                <h5>{data.title}</h5>
                <span>{data.content}</span>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.slideBtns}>
            <img src={arrow} onClick={() => swiper?.slidePrev()} />
            <img src={arrow} onClick={() => swiper?.slideNext()} />
          </div>
        </div>
        <div className={styles.intersecter} ref={intersectRef}></div>
      </div>
    </>
  );
}
export default Fourth;
