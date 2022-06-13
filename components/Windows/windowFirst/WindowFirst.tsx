import React, { useState, useEffect, useRef } from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import BIRDS from 'vanta/dist/vanta.net.min';
import styles from './WindowFirst.module.scss';
import { Header } from '../../../Layout/Header/Header';
import { Footer } from '../../../Layout/Footer/Footer';

const WindowFirst = React.forwardRef((): JSX.Element => {
  //    speed: -10,
  //  });

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          color: 0xff3f81,
          backgroundColor: 0x181625,
          points: 12,
          maxDistance: 24,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.window} id="main-section" ref={myRef}>
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
});

export default WindowFirst;
