import styles from './Modal.module.scss';
import close from '../../assets/close.png';
import { useDispatch } from 'react-redux';
import { setFalse } from '../../store/stewardshipSlide';
import { useTranslation } from 'react-i18next';

function Modal() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container} onClick={() => dispatch(setFalse())}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <img src={close} onClick={() => dispatch(setFalse())} />
        </div>
        <div className={styles.contentWrap}>
          <h3>{t('stewardship.title')}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: t('stewardship.content'),
            }}
          ></p>
          <button onClick={() => dispatch(setFalse())}>
            {t('stewardship.close')}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
