import { Parallax, useParallax } from 'react-scroll-parallax';
import styles from './WindowFirst.module.scss';
import { Header } from '../../../Layout/Header/Header';
import { Footer } from '../../../Layout/Footer/Footer';

const WindowFirst = (): JSX.Element => {
  //    speed: -10,
  //  });
  return (
    <div className={styles.window} id="main-section">
      <Header className={styles.header} />
      <div className={styles.windowBody}></div>
      {/* <video className={styles.video} preload="auto" autoPlay muted loop>
        <source
          src="/assets/background-video-full.mp4"
          type="video/mp4"
        ></source>
      </video> */}
      <Footer className={styles.windowFooter} />
    </div>
  );
};

export default WindowFirst;
