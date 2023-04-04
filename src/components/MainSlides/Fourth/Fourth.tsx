import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FreeMode, Autoplay } from 'swiper';
import SwiperCore from 'swiper';
import styles from './Fourth.module.scss';
import irBg from '../../../assets/background/irBg.png';
import { useEffect, useRef, useState } from 'react';
import arrow from '../../../assets/arrowWhiteThin.png';
import { useTranslation } from 'react-i18next';
const slideData = [
  {
    title: '누적포트폴리오',
    content: '+ 485건',
  },
  {
    title: '펀드운용',
    content: '132b +',
  },
  {
    title: '운용인력',
    content: '40명 +',
  },
  {
    title: '에코프로 파트너',
    content: '20팀 +',
  },
];
function Fourth() {
  const [swiperPC, setSwiperPC] = useState<SwiperCore>();
  const [swiper, setSwiper] = useState<SwiperCore>();
  const intersectRef = useRef<HTMLDivElement>(null);
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    if (!intersectRef.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsShowing(true);
      } else {
        setIsShowing(false);
      }
    });
    io.observe(intersectRef.current);
    return () => io.disconnect();
  }, [isShowing]);
  const { t, i18n } = useTranslation();
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
              <h3>Ecopro Partners</h3>
              <p dangerouslySetInnerHTML={{ __html: t('fourth.1') }}></p>
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
                  <h3>{t(`fourth.${data.title}`)}</h3>
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
          <h2>Ecopro Partners</h2>
          <p>{t('fourth.1')}</p>
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
