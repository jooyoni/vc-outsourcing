import styles from './Second.module.scss';
import arrow from '../../../assets/arrowWhite.png';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
let slideContent = [
  {
    title: '미래 산업 투자전문가<br />맨파워 구축',
    content: `대표이사는 지역 산업 육성 거점 기관 TP 원장 역임,<br />
  다수의 벤처기업 발굴 및 육성 경험 보유`,
    content2: `반도체, 이차전지 등 4차산업 분야 대기업 출신<br />
  산업전문가 등기이사 포진,<br />
  미래 산업군 발굴 조력`,
  },
  {
    title: '미래 산업 투자전문가<br />맨파워 구축',
    content: `대표이사는 지역 산업 육성 거점 기관 TP 원장 역임,<br />
  다수의 벤처기업 발굴 및 육성 경험 보유`,
    content2: `반도체, 이차전지 등 4차산업 분야 대기업 출신<br />
  산업전문가 등기이사 포진,<br />
  미래 산업군 발굴 조력`,
  },
  {
    title: '미래 산업 투자전문가<br />맨파워 구축',
    content: `대표이사는 지역 산업 육성 거점 기관 TP 원장 역임,<br />
  다수의 벤처기업 발굴 및 육성 경험 보유`,
    content2: `반도체, 이차전지 등 4차산업 분야 대기업 출신<br />
  산업전문가 등기이사 포진,<br />
  미래 산업군 발굴 조력`,
  },
  {
    title: '미래 산업 투자전문가<br />맨파워 구축',
    content: `대표이사는 지역 산업 육성 거점 기관 TP 원장 역임,<br />
  다수의 벤처기업 발굴 및 육성 경험 보유`,
    content2: `반도체, 이차전지 등 4차산업 분야 대기업 출신<br />
  산업전문가 등기이사 포진,<br />
  미래 산업군 발굴 조력`,
  },
];
function Second() {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [swiperPC, setSwiperPC] = useState<SwiperCore>();
  const [activeIdx, setActiveIdx] = useState(0);
  const [pcActiveIdx, setPcActiveIdx] = useState(0);

  console.log(activeIdx);
  return (
    <>
      <div className={`${styles.container} ${styles.pc}`}>
        <div className={styles.contentWrap}>
          <div>
            <h3>Our Business</h3>
            <div className={styles.contentArea}>
              {slideContent.map((slide, idx) => (
                <div
                  className={`${styles.content} ${
                    idx == pcActiveIdx ? styles.hit : ''
                  }`}
                  key={idx}
                >
                  <h4
                    dangerouslySetInnerHTML={{ __html: slide.title + idx }}
                  ></h4>
                  <p dangerouslySetInnerHTML={{ __html: slide.content }}></p>
                  <p dangerouslySetInnerHTML={{ __html: slide.content2 }}></p>
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
              // slideToClickedSlide={true}
              // loopedSlides={20}
              spaceBetween={32}
            >
              {slideContent.map((val, idx) => (
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
      <div className={`${styles.container} ${styles.mobile}`}>
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
                console.log(swiper.activeIndex % 4);
                setActiveIdx(swiper.activeIndex % 4);
              }}
            >
              {slideContent.map((content, idx) => (
                <SwiperSlide
                  key={idx}
                  className={`${styles.slide} ${'slide' + idx}`}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: content.title + idx }}
                  ></span>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.nextBtn} onClick={() => swiper?.slideNext()}>
              <img src={arrow} />
            </div>
          </div>
          <div className={styles.contentDetail}>
            {slideContent.map((content, idx) => (
              <div key={idx} className={idx == activeIdx ? styles.hit : ''}>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: content.title.replace('<br />', ' '),
                  }}
                ></h4>
                <p dangerouslySetInnerHTML={{ __html: content.content }}></p>
                <p dangerouslySetInnerHTML={{ __html: content.content2 }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Second;
