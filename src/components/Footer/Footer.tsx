import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './Footer.module.scss';
interface IPropsType {
  setModalType?: React.Dispatch<React.SetStateAction<number>>;
}
function Footer(props: IPropsType) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h1>i SQUARE VENTURES</h1>
            <span>Copyright@2023 i SQUARE VENTURES Co. Ltd.</span>
          </div>
          <ul className={styles.right}>
            <li
              onClick={() => {
                if (props.setModalType) props.setModalType(1);
              }}
            >
              스튜어드십코드
            </li>
            <li>개인정보처리방침</li>
            <li>고객정보 취급방침</li>
            <li>사이버신고센터</li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.companyInfo}>
            <li>
              <span>본사</span>
              <span>
                {' '}
                (28126) 충북 청주시 청원구 오창읍 각리1길 97 충북SW융합센터
                405호
              </span>
            </li>
            <li>
              <span>지사</span>
              <span>(06775) 서울특별시 서초구 마방로 68 동원산업빌딩 25층</span>
            </li>
          </ul>
          <span className={styles.copyright}>
            Copyright@2023 i SQUARE VENTURES Co. Ltd.
          </span>
        </div>
      </div>
    </>
  );
}
export default Footer;
