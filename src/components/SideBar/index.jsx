import classNames from 'classnames';
import { useState } from 'react';

import styles from './SideBar.module.css';

import { menu } from './config';
import { ThemeToggle } from '../ThemeToggle';

export function SideBar({ isOpened }) {
  const [activeItem, setActiveItem] = useState('vps');

  function menuItemClickHandler(id, hasSubgroup) {
    setActiveItem(id);
  }

  return (
    <aside className={classNames(styles.wrapper, { [styles.opened]: isOpened })}>
      <div className={styles.navMenu}>
        {menu.map((group, index) => (
          <div className={styles.menuGroup} key={index}>
            {group.map((item) => (
              <div
                className={classNames(styles.menuItem, { [styles.active]: activeItem === item.id })}
                onClick={() => menuItemClickHandler(item.id)}
                key={item.id}
              >
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