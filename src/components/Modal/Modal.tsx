import styles from './Modal.module.scss';
import close from '../../assets/close.png';
interface IPropsType {
  type: number;
  setModalType: React.Dispatch<React.SetStateAction<number>>;
}
function Modal(props: IPropsType) {
  return (
    <div className={styles.container} onClick={() => props.setModalType(0)}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <img src={close} onClick={() => props.setModalType(0)} />
        </div>
        <div className={styles.contentWrap}>
          <h3>개인정보처리방침</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: `1. 개인정보의 처리목적KB인베스트먼트는 인사관리, 제휴업체 계약관리, 투자관리 등 업무처리 목적을 위하여 개인정보를 처리합니다. 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 관련 법령에 따른 필요한 조치를 이행합니다.
            2. 개인정보의 처리 및 보유기간KB인베스트먼트는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유ㆍ이용기간 또는 관련법령에 따라 시효 또는 책임이 지속되거나 그 증명자료로서의 가치가 지속되는 기간 내에서 개인정보를 처리 및 보유하고 있습니다.
            3. 개인정보의 제3자 제공에 관한 사항KB인베스트먼트에서 처리되고 있는 개인정보는 「금융지주회사법」 등 관련법률이 이를 허용하는 경우에 한하여 KB금융그룹 계열사 등 제3자에게 제공하고 있습니다.
            4. 개인정보 처리의 위탁에 관한 사항KB인베스트먼트는 원활한 개인정보의 처리를 위하여 일부 개인정보 처리업무를 위탁할 수 있으나, 고객의 사전동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.개인정보 처리업무 위탁 계약 시에는 개인정보보호 관련 법규의 준수, 개인정보 제3자 제공 금지 및 책임부담 등을 명확히 규정하고 감독하며, 수탁업체, 위탁업무 내용 등은 홈페이지에 공개하고 있습니다.
            5. 고객의 권리ㆍ의무 및 그 행사방법에 관한 사항① 정보주체는 KB인베스트먼트에 대해 언제든지 개인정보의 열람ㆍ정정ㆍ삭제ㆍ처리정지등의 권리를 요구할 수 있습니다.② 제1호에 따른 권리행사는 KB인베스트먼트에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX)등을 통하여 하실 수 있으며 KB인베스트먼트는 이에 대해 지체없이 조치하겠습니다.③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 KB인베스트먼트는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.④ 제1호에 따른 권리행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
            6. 처리하는 개인정보의 항목① KB인베스트먼트는 내부직원의 인사관리, 계약관리 등의 업무처리목적을 위하여 성명, 생년월일, 주소정보, 연락처 정보를 처리하고 있습니다.② KB인베스트먼트는 투자관리 업무처리목적을 위하여 피투자회사 상호 및 법인등록번호, 사업자등록번호, 설립일자, 설립자본금, 대표자 성명, 대표자 생년월일, 담당자 이메일, 담당자 연락처, 회사 주소, 직원수, 재무현황, 결산월, 상장여부, 임직원의 학력 및 경력사항, 자회사 현황을 처리하고 있습니다.
            7. 개인정보의 파기에 관한 사항KB인베스트먼트는 개인정보의 처리목적 달성 또는 법령상 보유기간 경과 시에 전자적 개인정보는 영구 삭제하고 있으며, 서면 등의 개인정보는 파쇄 또는 소각처리하고 있습니다.
            8. 개인정보 안전성 확보조치에 관한 사항KB인베스트먼트는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.관리적 조치: 내부관리규정 수립, 시행, 정기적 직원 교육, 점검 등기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 보안프로그램 설치 등물리적 조치: 전산실, 자료보관실 등의 접근 통제
            9. 개인정보처리방침의 변경 등에 관한 사항KB인베스트먼트는 ‘개인정보처리방침’을 변경하는 경우에는 변경 및 시행시기, 변경된 내용을 지속적으로 공개하고 변경 전ㆍ후를 모두 공개하겠습니다.
            10. 개인정보 침해 등 피해구제에 관한 사항회사는 개인정보의 유출 및 권리 침해시 그 피해구제와 권익을 보장하기 위하여 최선을 다하겠습니다.개인정보 침해로 인한 신고, 상담 및 보다 자세한 도움이 필요하실 경우 아래의 기관에 문의하실 수 있습니다.개인정보분쟁조정위원회(www.kopico.go.kr / 국번없이 1833-6972)한국인터넷진흥원 개인정보침해신고센터(privacy.kisa.or.kr / 국번없이 118)대검찰청 사이버수사과(www.spo.go.kr/ 국번없이 1301)경찰청 사이버안전국(cyberbureau.police.go.kr / 국번없이 182)
            11. 개인정보보호 책임자에 관한 사항개인정보보호법 제31조에 따른 KB인베스트먼트의 개인정보보호 책임자는 다음과 같습니다.
            ▶ 개인정보 보호 책임자 : 전무 명현식 (02-3015-4709)
            ▶ 개인정보 보호 담당부서 : 경영지원그룹 (02-3015-4775)
            fdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsffdfsdfdsfdsfsdfsdfdsf`,
            }}
          ></p>
          <button onClick={() => props.setModalType(0)}>닫기</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
