import React, { useState, useEffect, useRef } from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import BIRDS from 'vanta/dist/vanta.net.min';
import styles from './WindowFirst.module.scss';
import { Header } from '../../../Layout/Header/Header';
import { Footer } from '../../../Layout/Footer/Footer';
import ScrollDown from '../../UI/ScrollDown/ScrollDown';

const WindowFirst = React.forwardRef((windowRef): JSX.Element => {
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
          // color: 0xbebebe,
          // backgroundColor: 0x181625,
          backgroundColor: 0x131314,
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
      {/* <Header className={styles.header} /> */}
      <div className={styles.windowBody}>
        <h1 className={styles.title}>
          Web-разработка <br /> под ключ
        </h1>
      </div>

      {/* <video className={styles.video} preload="auto" autoPlay muted loop>
        <source
          src="/assets/background-video-full.mp4"
          type="video/mp4"
        ></source>
      </video> */}

      <div className={styles.scroll}>
        <ScrollDown />
      </div>
    </div>
  );
});

export default WindowFirst;
