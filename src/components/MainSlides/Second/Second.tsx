import styles from './Second.module.scss';
import arrow from '../../../assets/arrowWhite.png';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import { useTranslation } from 'react-i18next';

function Second() {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [swiperPC, setSwiperPC] = useState<SwiperCore>();
  const [activeIdx, setActiveIdx] = useState(0);
  const [pcActiveIdx, setPcActiveIdx] = useState(0);
  const intersectRef = useRef<HTMLDivElement>(null);
  const [isShowing, setIsShowing] = useState(false);
  const { t, i18n } = useTranslation();
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
  return (
    <>
      <div className={styles.containerWrap}>
        <div
          className={`${styles.container} ${styles.pc} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <div className={styles.contentWrap}>
            <div>
              <h3>Our Business</h3>
              <div className={styles.contentArea}>
                {(
                  t('second.list', { returnObjects: true }) as {
                    title: string;
                  }[]
                ).map((slide, idx) => (
                  <div
                    className={`${styles.content} ${
                      idx == pcActiveIdx ? styles.hit : ''
                    }`}
                    key={idx}
                  >
                    <h4 dangerouslySetInnerHTML={{ __html: slide.title }}></h4>
                  </div>
                ))}
              </div>
              <div
                className={styles.slideNextBtn}
                onClick={() => swiperPC?.slideNext()}
              >
                <img src={arrow} />
              </div>
            </div>
            <div className={styles.sliderWrap}>
              <Swiper
                onSwiper={setSwiperPC}
                slidesPerView={'auto'}
                loop={true}
                speed={800}
                onSlideChangeTransitionEnd={(swiper) => {
                  setPcActiveIdx(swiper.activeIndex % 4);
                }}
                loopAdditionalSlides={1}
                // slideToClickedSlide={true}
                // loopedSlides={21}
                spaceBetween={32}
              >
                {(
                  t('second.list', { returnObjects: true }) as {
                    title: string;
                  }[]
                ).map((val, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={`${styles.slideWrap} ${'slide' + idx}`}
                  >
                    <div
                      className={styles.slideTitle}
                      dangerouslySetInnerHTML={{ __html: val.title }}
                    ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
        <div
          className={`${styles.container} ${styles.mobile} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <div className={styles.bg}></div>
          <div className={styles.content}>
            <h3>Our Business</h3>
            <div className={styles.sliderWrap}>
              <Swiper
                className={styles.slider}
                loop={true}
                onSwiper={setSwiper}
                speed={800}
                onSlideChangeTransitionEnd={(swiper) => {
                  setActiveIdx(swiper.activeIndex % 4);
                }}
              >
                {(
                  t('second.list', { returnObjects: true }) as {
                    title: string;
                  }[]
                ).map((content, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={`${styles.slide} ${'slide' + idx}`}
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: content.title }}
                    ></span>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                className={styles.nextBtn}
                onClick={() => swiper?.slideNext()}
              >
                <img src={arrow} />
              </div>
            </div>
            <div className={styles.contentDetail}>
              {(
                t('second.list', { returnObjects: true }) as {
                  title: string;
                }[]
              ).map((content, idx) => (
                <div key={idx} className={idx == activeIdx ? styles.hit : ''}>
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: content.title.replace('<br />', ' '),
                    }}
                  ></h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.intersecter} ref={intersectRef}></div>
      </div>
    </>
  );
}
export default Second;
