import type { NextPage } from 'next';

import { useInView } from 'react-intersection-observer';

import AboutUs from '../components/Windows/AboutUs/AboutUs';
import Cases from '../components/Windows/Cases/Cases';
import ContactUs from '../components/Windows/ContactUs/ContactUs';
import WindowFirst from '../components/Windows/windowFirst/WindowFirst';
import WindowFooter from '../components/Windows/WindowFooter/WindowFooter';
import { scroller } from '../utils/scroller';
import styles from './index.module.scss';

import { withLayout } from '../Layout/Layout';
import { useEffect, useRef } from 'react';

const Home: NextPage = () => {
  const pageEl = useRef(null);

  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });

  return (
    <div className={styles.page} ref={pageEl}>
      <WindowFirst />
      <AboutUs />
      <Cases />

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
