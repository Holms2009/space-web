import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SideBar.module.css';

import { ThemeToggle } from '../ThemeToggle';
import { getMenuData } from '../../shared/config/sideBar';
import { setActiveSection } from '../../app/store';
import { useEffect } from 'react';
import { lockScroll, unlockScroll } from '../../shared/lib';

export function SideBar({ isOpened }) {
  const { activeSection } = useSelector(state => state.app)
  const dispatch = useDispatch();
  const menu = getMenuData();

  useEffect(() => {
    isOpened ? lockScroll() : unlockScroll();
  }, [isOpened])

  function menuItemClickHandler(id) {
    dispatch(setActiveSection(id));
  }

  return (
    <aside className={classNames(styles.wrapper, { [styles.opened]: isOpened })}>
      <div className={styles.navMenu}>
        {menu.map((group, index) => (
          <div className={styles.menuGroup} key={index}>
            {group.map((item) => (
              <div
                className={classNames(styles.menuItem, { [styles.active]: activeSection === item.id })}
                onClick={() => menuItemClickHandler(item.id)}
                key={item.id}
              >
                <div className={styles.menuItemWrapper}>
                  <img className={styles.menuIcon} src={item.icon} alt="" />
                  <span className={styles.menuText}>{item.name}</span>
                </div>
                {item.submenu ?
                  <div className={styles.submenu}>
                    {item.submenu.map((subItem, index) => (
                      <div className={styles.subItem} key={index}>
                        {subItem.type === 'monitor' ?
                          <div className={classNames(styles.monitorIcon, {[styles.monitorActive]: subItem.icon === 'active'})}></div> :
                          <img className={styles.menuIcon} src={subItem.icon} alt="" />
                        }
                        <span className={styles.menuText}>{subItem.name}</span>
                      </div>
                    ))}
                  </div> :
                  null}
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