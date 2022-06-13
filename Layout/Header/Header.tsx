import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import Link from 'next/link';
// const LogoIcon = require('/logo.svg');

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.headerContainer}>
        <Link className={styles.headerLink} href="#">
          Logo
        </Link>
        <nav>
          <a href="#aboutus-section" className={styles.headerNavLink}>
            О нас
          </a>
          <a href="#cases-section" className={styles.headerNavLink}>
            Кейсы
          </a>
          <a href="#contactus-section" className={styles.headerNavLink}>
            Начать работу
          </a>
        </nav>
      </div>
    </header>
  );
};
