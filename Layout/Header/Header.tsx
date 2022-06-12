import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.headerContainer}>
        <nav>
          <a href="#aboutus-section">О нас</a>
          <a href="#cases-section">Кейсы</a>
          <a href="#contactus-section">Начать работу</a>
        </nav>
      </div>
    </header>
  );
};
