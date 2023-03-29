import styles from './First.module.scss';
// import video from "../../../assets/background/test.mp4";
const video = require('../../../assets/background/bannerVideo.mp4');
function First() {
  return (
    <div className={styles.container}>
      <video src={video} autoPlay muted loop playsInline></video>
      <div className={styles.textWrap}>
        <h1>Ecopro Partners</h1>
        <p>It improves the quality of human life and makes it convenient</p>
      </div>
    </div>
  );
}
export default First;
