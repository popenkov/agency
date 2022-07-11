import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import CaseNavigation from '../../case-navigation/CaseNavigation';
import Case from '../../Case/Case';
import styles from './Cases.module.scss';

const navigationItems = [
  {
    name: 'test',
    link: 'test',
  },
  {
    name: 'test',
    link: 'test',
  },
];

const casesData = [
  {
    title: 'test',
    link: 'test',
    category: 'test',
    works: 'test',
    photos: 'test',
  },
  {
    title: 'test',
    link: 'test',
    category: 'test',
    works: 'test',
    photos: 'test',
  },
  {
    title: 'test',
    link: 'test',
    category: 'test',
    works: 'test',
    photos: 'test',
  },
];

function Cases() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {navigationItems &&
          navigationItems.map((item, index) => {
            return <CaseNavigation key={index} {...item} />;
          })}
      </div>
      <div className={styles.cases}>
        {casesData &&
          casesData.map((item, index) => {
            return <Case key={index} {...item} />;
          })}
      </div>
    </div>
    // <Parallax pages={3} style={{ backgroundColor: '#282828' }}>
    //   <ParallaxLayer offset={0} speed={0} style={{}}></ParallaxLayer>

    //   <ParallaxLayer
    //     offset={1}
    //     speed={0.5}
    //     // style={{ backgroundColor: 'yellow' }}
    //   ></ParallaxLayer>

    //   <ParallaxLayer
    //     offset={1}
    //     speed={0.5}
    //     style={{
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       color: 'white',
    //     }}
    //   >
    //     <p>12331</p>
    //   </ParallaxLayer>

    //   <ParallaxLayer
    //     offset={2}
    //     speed={2}
    //     style={{ backgroundColor: '#18233a' }}
    //   ></ParallaxLayer>

    //   <ParallaxLayer
    //     offset={2}
    //     speed={0.5}
    //     style={
    //       {
    //         // display: 'flex',
    //         // justifyContent: 'center',
    //         // alignItems: 'center',
    //         // color: 'white',
    //       }
    //     }
    //   >
    //     <p>12331</p>
    //   </ParallaxLayer>
    // </Parallax>
  );
}

export default Cases;
