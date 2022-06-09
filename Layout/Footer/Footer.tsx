import { FooterProps } from './Footer.props';

const cn = require('classnames');
import styles from './Footer.module.scss';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.footerContainer}>
        <p className={styles.copyright}>
          All rights reserved Popenkov Anton 2020 - {format(new Date(), 'yyyy')}
        </p>
      </div>
    </footer>
  );
};
