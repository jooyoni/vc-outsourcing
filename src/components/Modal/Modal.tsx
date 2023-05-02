import styles from './Modal.module.scss';
import close from '../../assets/close.png';
import { useDispatch } from 'react-redux';
import { setFalse } from '../../store/stewardshipSlide';

function Modal() {
  const dispatch = useDispatch();
  return (
    <div className={styles.container} onClick={() => dispatch(setFalse())}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <img src={close} onClick={() => dispatch(setFalse())} />
        </div>
        <div className={styles.contentWrap}>
          <h3>스튜어드십 코드</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: `
              1. 투자대상회사와 경제ㆍ사회ㆍ사업 환경 등에 관한 깊은 이해를 바탕으로 적극적인 소통과 주주활동을 통해 회사가치의 상승과 회사의 성장을 추구함으로써 고객과 수익자의 중장기적인 이익을 도모한다.
              <br />
              2. 이해상충 문제를 관리하기 위해 관련 정책, 자본시장법령 및 관계 규정이 정한 방법 등을 준수하며, 고객과 수익자의 신뢰를 높이는 방향으로 이들 수단을 적절히 활용한다. 
              <br />
              3. 투자대상회사의 가치를 중대하게 훼손할 가능성이 있는 위험 요소를 사전에 발견하도록 노력하고 위험 요소 및 기타 우려 사항을 확인한 경우에는 주주총회 전 협의 등 건설적인 소통을 통해 적절한 해결책을 모색한다. 
              <br />
              4. 적극적인 주주활동 과정에서 미공개 중요 정보의 이용 금지에 관한 자본시장법상 규정을 위반하게 될 가능성이 있음에 주의하고 특히 회사가치에 중대한 영향을 끼치는 내부 정보를 이용해 정보 우위를 기반으로 거래상 이득을 취하려고 시도하지 않는다.
              <br />
              5. 적극적인 주주활동을 토대로 투자대상회사의 중장기 발전과 지속가능성 제고를 도모하기 위해 회사에 대한 이해를 높이고 건설적인 주주활동이 가능하도록 역량과 전문성을 갖춘다.
`,
            }}
          ></p>
          <button onClick={() => dispatch(setFalse())}>닫기</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
