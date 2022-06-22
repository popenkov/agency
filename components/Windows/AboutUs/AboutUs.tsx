import styles from './AboutUs.module.scss';

function AboutUs() {
  return (
    <div className={styles.aboutUs} id="aboutus-section">
      <div className={styles.curtain}>
        <div className={styles.container}>
          <h2 className={styles.title}>О нас</h2>
          <p className={styles.description}>Люблю собачек</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
