import { HeaderSecond } from "../../Layout/HeaderSecond/HeaderSecond";
import styles from "./WindowFirst.module.scss";

const WindowFirst = (): JSX.Element => {
  return (
    <div className={styles.window}>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay muted loop>
          <source
            src="/assets/background-video-full.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <HeaderSecond />
    </div>
  );
};

export default WindowFirst;
