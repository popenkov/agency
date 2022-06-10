import { HeaderProps } from "./HeaderSecond.props";
import styles from "./HeaderSecond.module.scss";

export const HeaderSecond = ({
  children,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header} {...props}>
      <nav className={styles.headerContainer}>Header</nav>
    </header>
  );
};
