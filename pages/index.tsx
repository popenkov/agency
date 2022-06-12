import type { NextPage } from 'next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import AboutUs from '../components/Windows/AboutUs/AboutUs';
import Cases from '../components/Windows/Cases/Cases';
import ContactUs from '../components/Windows/ContactUs/ContactUs';
import WindowFirst from '../components/Windows/windowFirst/WindowFirst';
import WindowFooter from '../components/Windows/WindowFooter/WindowFooter';
import { scroller } from '../utils/scroller';

import { withLayout } from '../Layout/Layout';

const Home: NextPage = () => {
  return (
    <div className="page">
      <Parallax pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          factor={0.5}
          style={{
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            boxShadow: '1px 2px 9px #F4AAB9',
          }}
        >
          <WindowFirst />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1}
          speed={2}
          // style={{ backgroundColor: 'yellow' }}
        >
          <p>test</p>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <AboutUs />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
          // style={{ backgroundColor: 'red' }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <WindowFooter />
        </ParallaxLayer>
      </Parallax>
      {/* <WindowFirst />
      <AboutUs />
      <Cases />
      <ContactUs />
      <WindowFooter /> */}
    </div>
  );
};

export default Home;
// export default withLayout(Home);
