import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
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
    name: number;
    position: { title: string; english_title: string };
    position_id: 1;
  }[];
}
function Team() {
  const [employeeData, setEmployeeData] = useState<IEmployeeDataType[]>([]);
  useEffect(() => {
    axiosClient.get('/api/teams').then((res) => setEmployeeData(res.data));
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.contentArea}>
          <h3>TEAM</h3>
          <h2>아이스퀘어벤처스</h2>
          <p>
            아이스퀘어벤처스는 지역 기반 벤처투자생태계 조성으로 지속가능한
            기업생태계 구축을 위해 환경 및 전지재료 사업 기업인 ㈜에코프로가
            설립한 중소기업창업투자회사입니다.
          </p>
        </div>
      </section>
      <section className={styles.contentArea}>
        <div className={styles.leadershipWrap}>
          <h3>- LEADERSHIP</h3>
          <ul>
            {employeeData[0] &&
              employeeData[0].users.map((employee) => (
                <li key={employee.id}>
                  <div className={styles.imageWrap}>
                    <img src={employee.avatar || ''} />
                  </div>
                  <div className={styles.detailWrap}>
                    <span className={styles.position}>
                      {employee.position.english_title}{' '}
                      {employee.position.title}
                    </span>
                    <span className={styles.name}>{employee.name}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.investmentWrap}>
          <h3>- INVESTMENT</h3>
          <ul>
            {employeeData[1] &&
              employeeData[1].users.map((employee) => (
                <li key={employee.id}>
                  <div className={styles.imageWrap}>
                    <img src={employee.avatar || ''} />
                  </div>
                  <div className={styles.detailWrap}>
                    <span className={styles.position}>
                      {employee.position.english_title}{' '}
                      {employee.position.title}
                    </span>
                    <span className={styles.name}>{employee.name}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.operationWrap}>
          <h3>- OPERATION</h3>
          <ul>
            {employeeData[2] &&
              employeeData[2].users.map((employee) => (
                <li key={employee.id}>
                  <div className={styles.imageWrap}></div>
                  <div className={styles.detailWrap}>
                    <span className={styles.position}>
                      {employee.position.english_title}{' '}
                      {employee.position.title}
                    </span>
                    <span className={styles.name}>{employee.name}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Team;
