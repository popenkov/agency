import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';

import AboutUs from '../components/Windows/AboutUs/AboutUs';
import Cases from '../components/Windows/Cases/Cases';
import ContactUs from '../components/Windows/ContactUs/ContactUs';
import WindowFirst from '../components/Windows/windowFirst/WindowFirst';
import WindowFooter from '../components/Windows/WindowFooter/WindowFooter';
import { scroller } from '../utils/scroller';
import styles from './index.module.scss';

import { withLayout } from '../Layout/Layout';
import { Header } from '../Layout/Header/Header';
import classNames from 'classnames';

const Home: NextPage = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const headerHeight = headerRef?.current?.clientHeight;
      const pageHeight = window.innerHeight;
      console.log(window.innerHeight);
      window.addEventListener('scroll', () => {
        setIsScrolled(window.pageYOffset > pageHeight - headerHeight / 2);
      });
    }
  }, []);

  return (
    <div className={styles.page}>
      <Header
        ref={headerRef}
        className={classNames(styles.header, {
          [styles.scrolled]: isScrolled === true,
        })}
      />
      <WindowFirst />
      <AboutUs />
      <Cases />

      {/* <WindowFirst />
      <AboutUs />
      <Cases />
      <ContactUs />
      <WindowFooter /> */}
      <WindowFooter />
    </div>
  );
};

export default Home;
// export default withLayout(Home);
