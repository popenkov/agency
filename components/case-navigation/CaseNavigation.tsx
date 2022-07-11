import styles from './CaseNavigation.module.scss';

type NavigationProps = {
  name: string;
  link: string;
};

function CaseNavigation({ name, link }: NavigationProps): JSX.Element {
  return <div className={styles.item}>{name}</div>;
}

export default CaseNavigation;
