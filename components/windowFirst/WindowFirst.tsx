import styles from './WindowFirst.module.scss';

const WindowFirst = (): JSX.Element => {
  return (
    <div className={styles.window}>
      WindowFirst
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay muted loop>
          <source
            src="/assets/background-video-full.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default WindowFirst;
