import type { NextPage } from 'next';
import WindowFirst from '../components/windowFirst/WindowFirst';
import WindowSecond from '../components/windowSecond/WindowSecond';

import { withLayout } from '../Layout/Layout';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <WindowFirst />
      <WindowSecond />
    </div>
  );
};

export default withLayout(Home);
