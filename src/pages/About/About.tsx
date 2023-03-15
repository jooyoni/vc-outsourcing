import styles from './About.module.scss';
import sign from '../../assets/about/chairmanSign.png';
import Footer from '../../components/Footer/Footer';
function About() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.contentArea}>
          <span>ABOUT</span>
          <div>LOGO</div>
          <h1>아이스퀘어벤처스</h1>
          <p>
            아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로 지속가능한
            기업생태계 구축을 위해 환경 및 전지재료 사업 기업인 ㈜에코프로가
            설립한 중소기업창업투자회사입니다.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.contentArea}>
          <div className={styles.left}>
            <span>CEO 인사말</span>
            <h3>Ecopro Philosophy</h3>
            <h2>
              인류의 삶의 질을 개선하고
              <br />
              편리하게 한다.
            </h2>
            <p>
              에코프로 이념을 계승하여 혁신적인 방법으로
              <br />
              인류의 삶을 윤택하게 만드는 기업을 발굴
              <br />
              투자와 시장확보(전략적 비즈니스 교류 지원 등)를
              <br />
              동시 지원하여 동반성장 하고자 합니다.
            </p>
            <div className={styles.chairmanInfo}>
              <span>아이스퀘어 그룹 회 장</span>
              <span>이재훈</span>
              <img src={sign} alt="서명" />
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </section>
      <section>
        <div className={styles.contentArea}>
          <h4>ECOPRO PARTNER</h4>
          <ul>
            <li>
              <span>01</span>
              <p>환경 & 에너지 분야 특화 VC</p>
            </li>
            <li>
              <span>02</span>
              <p>가까이에서 빈번히 상호작용하는 동반성장 지향형 VC</p>
            </li>
            <li>
              <span>03</span>
              <p>기업가 정신을 지속하고 꿈을 실현 하도록 돕는 조력자</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className={styles.contentArea}>
          <div className={styles.left}>
            <p>
              아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로 지속가능한
              기업생태계 구축을 위해 환경 및 전지재료 사업 기업인 ㈜에코프로가
              설립한 중소기업창업투자회사입니다.
            </p>
          </div>
          <div className={styles.right}>
            <h4>회사개요</h4>
            <ul>
              <li>
                <span className={styles.title}>회사명</span>
                <div>
                  <span>아이스퀘어벤처스</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>최대주주</span>
                <div>
                  <span>주식회사 에코프로 (KOSDAQ 상장)</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>자본금</span>
                <div>
                  <span>50억원</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>설립일</span>
                <div>
                  <span>2020년 7월 20일</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>창업투자회사 등록일</span>
                <div>
                  <span>2020년 8월 25일</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>업종</span>
                <div>
                  <span>중소기업창업투자회사, 사업경영 및 관리 자문</span>
                </div>
              </li>
              <li>
                <span className={styles.title}>소재지</span>
                <div>
                  <span>
                    (본 사) 충북 청주시 청원구 오창읍 각리1길 97 충북SW융합센터
                    405호
                  </span>
                  <span>(사무소) 서울시 강남구 테헤란로 314 금성빌딩 12층</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>연혁 api완성되면 작업 예정</section>
      <section>
        <div className={styles.contentArea}>
          <h4>주요 투자대상</h4>
          <p>
            초기단계 기업 투자지원경험과 에코프로 그룹의 환경 및 이차전지 분야
            네트워크를 바탕으로 환경에너지 분야의 기술력 기반 기업을 집중적으로
            발굴투자하고자 합니다.
          </p>
          <table>
            <th>투자이념</th>
            <th>중점 투자분야</th>
            <th>세부 투자분야</th>
            <tr className={styles.row1}>
              <td rowSpan={3}>
                혁신적인 방법으로 인류의 삶을 윤택하게 만드는 기업
              </td>
              <td>환경</td>
              <td>
                <ul>
                  <li>✓ 유해가스 제거</li>
                  <li>✓ 온실가스 제거</li>
                  <li>✓ 대기오염 방지</li>
                  <li>✓ 스마트 그린산단</li>
                  <li>✓ 폐기물 처리</li>
                </ul>
              </td>
            </tr>
            <tr className={styles.row2}>
              <td>에너지</td>
              <td>
                <ul>
                  <li>✓ 이차전지</li>
                  <li>✓ 친환경 스마트 모빌리티</li>
                  <li>✓ 신재생 에너지</li>
                </ul>
              </td>
            </tr>
            <tr className={styles.row3}>
              <td>기타</td>
              <td>
                <ul>
                  <li>✓ 소재</li>
                  <li>✓ 인공지능</li>
                  <li>✓ 데이터</li>
                  <li>✓ 바이오</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default About;
