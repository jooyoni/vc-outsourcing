import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import axiosClient from '../../libs/axiosClient';
import styles from './Team.module.scss';
interface IEmployeeDataType {
  created_at: string;
  english_title: string;
  id: number;
  sort_order: number;
  title: string;
  updated_at: string;
  users: {
    avatar: null | string;
    department_id: number;
    email: string;
    gender: string;
    id: number;
    name: string | null;
    english_name: string | null;
    position: { title: string; english_title: string };
    position_id: 1;
  }[];
}
function Team() {
  const [employeeData, setEmployeeData] = useState<IEmployeeDataType[]>([]);
  useEffect(() => {
    axiosClient.get('/api/teams').then((res) => setEmployeeData(res.data));
  }, []);
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div
          className={`${styles.contentArea} ${inView1 ? styles.isShowing : ''}`}
        >
          <h3>TEAM</h3>
          <h2>아이스퀘어벤처스</h2>
          <p>
            아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로 지속가능한
            기업생태계 구축을 위해 환경 및 전지재료 사업 기업인 ㈜에코프로가
            설립한 중소기업창업투자회사입니다.
          </p>
        </div>
        <div ref={ref1} className={styles.observer}></div>
      </section>
      <section className={styles.contentArea}>
        <div className={styles.leadershipWrap}>
          <h3>- LEADERSHIP</h3>
          <ul
            className={`${styles.employeeList} ${
              inView2 ? styles.isShowing : ''
            }`}
          >
            {employeeData[0] ? (
              employeeData[0].users.map((employee, idx) => (
                <li
                  key={employee.id}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className={styles.imageWrap}>
                    <img src={employee.avatar || ''} />
                  </div>
                  <div className={styles.detailWrap}>
                    <span className={styles.position}>
                      {i18n.resolvedLanguage == 'ko'
                        ? employee.position.title
                        : employee.position.english_title}
                    </span>
                    <span className={styles.name}>
                      {i18n.resolvedLanguage == 'ko' || !employee.english_name
                        ? employee.name
                        : employee.english_name}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <Spinner />
            )}
            {employeeData[0] && (
              <div ref={ref2} className={styles.observer}></div>
            )}
          </ul>
        </div>
        <div className={styles.investmentWrap}>
          <h3>- INVESTMENT</h3>
          <ul
            className={`${styles.employeeList} ${
              inView3 ? styles.isShowing : ''
            }`}
          >
            {employeeData[1] ? (
              employeeData[1].users.map((employee, idx) => (
                <li
                  key={employee.id}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className={styles.imageWrap}>
                    <img src={employee.avatar || ''} />
                  </div>
                  <div className={styles.detailWrap}>
                    <span className={styles.position}>
                      {i18n.resolvedLanguage == 'ko'
                        ? employee.position.title
                        : employee.position.english_title}
                    </span>
                    <span className={styles.name}>
                      {i18n.resolvedLanguage == 'ko' || !employee.english_name
                        ? employee.name
                        : employee.english_name}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <Spinner />
            )}
            {employeeData[1] && (
              <div ref={ref3} className={styles.observer}></div>
            )}
          </ul>
        </div>
        <div className={styles.operationWrap}>
          <h3>- OPERATION</h3>
          <ul
            className={`${styles.employeeList} ${
              inView4 ? styles.isShowing : ''
            }`}
          >
            {employeeData[2] ? (
              employeeData[2].users.map((employee, idx) => (
                <li
                  key={employee.id}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className={styles.imageWrap}></div>
                  <div className={styles.detailWrap}>
                    <span className={styles.position}>
                      {i18n.resolvedLanguage == 'ko'
                        ? employee.position.title
                        : employee.position.english_title}
                    </span>
                    <span className={styles.name}>
                      {i18n.resolvedLanguage == 'ko' || !employee.english_name
                        ? employee.name
                        : employee.english_name}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <Spinner />
            )}
            {employeeData[2] && (
              <div ref={ref4} className={styles.observer}></div>
            )}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Team;
