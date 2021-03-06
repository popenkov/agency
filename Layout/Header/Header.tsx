import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import Link from 'next/link';
import { forwardRef } from 'react';

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, ...props }, ref): JSX.Element => {
    return (
      <header ref={ref} className={styles.header} {...props}>
        <div className={styles.headerContainer}>
          <Link className={styles.headerLink} href="#">
            <img
              className={styles.logo}
              src="/logo.svg"
              alt="An SVG of an eye"
            />
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
  }
);
