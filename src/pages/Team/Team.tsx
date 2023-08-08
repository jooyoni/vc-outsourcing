import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView, InView } from 'react-intersection-observer';
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
    career_career: {
      title: null | string;
      english_title: null | string;
      career_type: number;
    }[];
  }[];
}
function Team() {
  const [employeeData, setEmployeeData] = useState<IEmployeeDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axiosClient.get('/api/teams').then((res) => {
      setEmployeeData(res.data);
      setIsLoading(false);
    });
  }, []);
  const [ref1, inView1] = useInView();
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div
          className={`${styles.contentArea} ${inView1 ? styles.isShowing : ''}`}
        >
          <h3>TEAM</h3>
          {/* <h2>{t('about.section1.1')}</h2> */}
          <p
            dangerouslySetInnerHTML={{
              __html:
                window.innerWidth > 450
                  ? t('team.1')
                  : t('team.1').replace(/<br \/>/gi, ''),
            }}
          ></p>
        </div>
        <div ref={ref1} className={styles.observer}></div>
      </section>
      <section
        className={`${styles.contentArea} ${
          i18n.language == 'en' ? styles.english : ''
        }`}
      >
        {employeeData.length ? (
          employeeData.map((level) => (
            <div className={styles.positionWrap} key={level.id}>
              <h3>
                - {i18n.language == 'en' ? level.english_title : level.title}
              </h3>
              <InView threshold={0.2}>
                {({ inView, ref, entry }) => (
                  <ul
                    className={`${styles.employeeList} ${
                      inView ? styles.isShowing : ''
                    }`}
                    ref={ref}
                  >
                    {level &&
                      !isLoading &&
                      level.users.map((employee, idx) => (
                        <li
                          key={employee.id}
                          style={{ transitionDelay: `${idx * 0.1}s` }}
                        >
                          <div className={styles.top}>
                            <h5
                            // style={{ fontSize: '20px', lineHeight: '24px' }}
                            >
                              {i18n.resolvedLanguage == 'ko'
                                ? employee.name
                                : employee.english_name}
                            </h5>
                            <span>
                              {i18n.resolvedLanguage == 'ko'
                                ? employee.position.title
                                : employee.position.english_title}
                            </span>
                          </div>
                          <ul className={styles.careerList}>
                            {employee.career_career.map((career, idx) => (
                              <li key={idx}>
                                <span>
                                  {i18n.resolvedLanguage == 'ko'
                                    ? career.title
                                    : career.english_title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                )}
              </InView>
            </div>
          ))
        ) : (
          <Spinner />
        )}

        {/* <div className={styles.leadershipWrap}>
          <h3>- LEADERSHIP</h3>
          <ul
            className={`${styles.employeeList} ${
              inView2 ? styles.isShowing : ''
            }`}
          >
            {employeeData[0] && !isLoading ? (
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
            {employeeData[1] && !isLoading ? (
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
            {employeeData[2] && !isLoading ? (
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
        </div> */}
      </section>
      <Footer />
    </div>
  );
}
export default Team;
