import classNames from 'classnames';

import styles from './SideBar.module.css';

import { menu } from './config';
import { ThemeToggle } from '../ThemeToggle';

export function SideBar({ isOpened }) {
  return (
    <aside className={classNames(styles.wrapper, { [styles.opened]: isOpened })}>
      <div className={styles.navMenu}>
        {menu.map((group, index) => (
          <div className={styles.menuGroup} key={index}>
            {group.map((item) => (
              <div className={styles.menuItem} key={item.name}>
                <img className={styles.menuIcon} src={item.icon} alt="" />
                <span className={styles.menuText}>{item.name}</span>
              </div>
            ))}
          </div>

        ))}
      </div>
      <div className={styles.mobileBar}>
        <ThemeToggle isVisible />
      </div>
    </aside>
  )
}