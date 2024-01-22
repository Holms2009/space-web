import classNames from 'classnames';

import styles from './ThemeToggle.module.css';
import logo from '../../assets/images/logo.svg';

import { Toggle } from '../../shared/ui-kit';

export function ThemeToggle({ isVisible }) {
  return (
    <div className={classNames(styles.wrapper, { [styles.opened]: isVisible })}>
      <img src={logo} alt="Логотип компании SpaceWeb" />
      <div className={styles.toggle}>
        <Toggle />
      </div>
    </div>
  )
}