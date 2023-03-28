import styles from './First.module.scss';
// import video from "../../../assets/background/test.mp4";
const video = require('../../../assets/background/test.mp4');
function First() {
  return (
    <div className={styles.container}>
      <video src={video} autoPlay muted loop></video>
    </div>
  );
}
export default First;
