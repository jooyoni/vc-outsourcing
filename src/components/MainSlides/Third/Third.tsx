import styles from './Third.module.scss';
import plus from '../../../assets/plus.png';
import { useEffect, useRef, useState } from 'react';
function Third() {
  const [detailOpen, setDetailOpen] = useState([false, false, false]);
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
  return (
    <>
      <div className={styles.containerWrap}>
        <div
          className={`${styles.container} ${styles.pc} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <div className={styles.left}>
            <div className={styles.textWrap}>
              <span>“</span>
              <p>
                인류의 삶의 질을
                <br />
                개선하고 편리하게 한다
              </p>
              <p>
                에코프로 이념을 계승하여 혁신적인 방법으로 인류의 삶을 윤택하게
                만드는 기업을 발굴, 투자와 시장확보(전략적 비즈니스 교류 지원
                등)를 동시 지원하여 동반성장 하고자 합니다.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <ul>
              <li className={detailOpen[0] ? styles.isOpen : ''}>
                <div
                  className={styles.title}
                  onClick={() =>
                    setDetailOpen((prev) => [!prev[0], false, false])
                  }
                >
                  <h3>환경 & 에너지 분야특화 VC</h3>
                  <img src={plus} />
                </div>
                <p>
                  아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로
                  지속가능한 기업생태계 구축을 위해 환경 및 전지재료 사업 기업인
                  ㈜에코프로가 설립한 중소기업창업투자회사입니다.
                </p>
              </li>
              <li className={detailOpen[1] ? styles.isOpen : ''}>
                <div
                  className={styles.title}
                  onClick={() =>
                    setDetailOpen((prev) => [false, !prev[1], false])
                  }
                >
                  <h3>동반성장 지향형 VC</h3>
                  <img src={plus} />
                </div>
                <p>
                  아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로
                  지속가능한 기업생태계 구축을 위해 환경 및 전지재료 사업 기업인
                  ㈜에코프로가 설립한 중소기업창업투자회사입니다.
                </p>
              </li>
              <li className={detailOpen[2] ? styles.isOpen : ''}>
                <div
                  className={styles.title}
                  onClick={() =>
                    setDetailOpen((prev) => [false, false, !prev[2]])
                  }
                >
                  <h3>꿈을 실현하도록</h3>
                  <img src={plus} />
                </div>
                <p>
                  아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로
                  지속가능한 기업생태계 구축을 위해 환경 및 전지재료 사업 기업인
                  ㈜에코프로가 설립한 중소기업창업투자회사입니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${styles.container} ${styles.mobile} ${
            isShowing ? styles.isIntersected : ''
          }`}
        >
          <span>“</span>
          <h2>
            인류의 삶의 질을
            <br />
            개선하고 편리하게 한다
          </h2>
          <p>
            에코프로 이념을 계승하여 혁신적인 방법으로
            <br />
            인류의 삶을 윤택하게 만드는 기업을 발굴, 투자와
            <br />
            시장확보(전략적 비즈니스 교류 지원 등)를 동시 지원하여
            <br />
            동반성장 하고자 합니다.
          </p>
          <div className={styles.infomationWrap}>
            <ul>
              <li className={detailOpen[0] ? styles.isOpen : ''}>
                <div
                  className={styles.title}
                  onClick={() =>
                    setDetailOpen((prev) => [!prev[0], false, false])
                  }
                >
                  <span>환경 & 에너지 분야특화 VC</span>
                  <img src={plus} />
                </div>
                <div className={styles.detail}>
                  <p>
                    아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로
                    지속가능한 기업생태계 구축을 위해 환경 및 전지재료 사업
                    기업인 ㈜에코프로가 설립한 중소기업창업투자회사입니다.
                  </p>
                </div>
              </li>
              <li className={detailOpen[1] ? styles.isOpen : ''}>
                <div
                  className={styles.title}
                  onClick={() =>
                    setDetailOpen((prev) => [false, !prev[1], false])
                  }
                >
                  <span>환경 & 에너지 분야특화 VC</span>
                  <img src={plus} />
                </div>
                <div className={styles.detail}>
                  <p>
                    아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로
                    지속가능한 기업생태계 구축을 위해 환경 및 전지재료 사업
                    기업인 ㈜에코프로가 설립한 중소기업창업투자회사입니다.
                  </p>
                </div>
              </li>
              <li className={detailOpen[2] ? styles.isOpen : ''}>
                <div
                  className={styles.title}
                  onClick={() =>
                    setDetailOpen((prev) => [false, false, !prev[2]])
                  }
                >
                  <span>환경 & 에너지 분야특화 VC</span>
                  <img src={plus} />
                </div>
                <div className={styles.detail}>
                  <p>
                    아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로
                    지속가능한 기업생태계 구축을 위해 환경 및 전지재료 사업
                    기업인 ㈜에코프로가 설립한 중소기업창업투자회사입니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.intersecter} ref={intersectRef}></div>
      </div>
    </>
  );
}
export default Third;
