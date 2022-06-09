import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <div className={styles.headerContainer}>Header</div>
    </header>
  );
};