import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Case from '../../Case/Case';
import styles from './Cases.module.scss';

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
    <div className={styles.cases}>
      {casesData &&
        casesData.map((item) => {
          return <Case {...item} />;
        })}
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
