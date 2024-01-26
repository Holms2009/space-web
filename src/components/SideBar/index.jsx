import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SideBar.module.css';

import { ThemeToggle } from '../ThemeToggle';
import { getMenuData } from '../../shared/config/sideBar';
import { setActiveSection } from '../../app/store';
import { useEffect, useState } from 'react';
import { lockScroll, unlockScroll, useMediaQuery } from '../../shared/lib';

export function SideBar({ isOpened, openHandler }) {
  const { activeSection } = useSelector(state => state.app)
  const [openedSubmenus, setOpenedSubmenus] = useState([]);
  const dispatch = useDispatch();
  const menu = getMenuData();
  const isMobile = useMediaQuery('(max-width: 540px)');

  useEffect(() => {
    if (isMobile) {
      isOpened ? lockScroll() : unlockScroll();
    }
  }, [isOpened]);

  function menuItemClickHandler(id) {
    dispatch(setActiveSection(id));
    (openHandler && isMobile) && openHandler(false);
  }

  function toggleSubmenu(itemId) {
    if (!openedSubmenus.includes(itemId)) {
      setOpenedSubmenus([...openedSubmenus, itemId]);
    } else {
      setOpenedSubmenus(openedSubmenus.filter((item) => item !== itemId));
    }
  }

  return (
    <aside className={classNames(styles.wrapper, { [styles.opened]: isOpened })}>
      <button className={styles.close} onClick={() => openHandler(false)}></button>
      <div className={styles.navMenu}>
        {menu.map((group, index) => (
          <div className={styles.menuGroup} key={index}>
            {group.map((item) => (
              <div className={classNames(styles.menuItem, { [styles.expand]: openedSubmenus.includes(item.id) })} key={item.id}>
                <div
                  className={classNames(
                    styles.menuItemWrapper,
                    { [styles.active]: activeSection === item.id && !item.submenu }
                  )}
                  onClick={() => !item.submenu ? menuItemClickHandler(item.id) : toggleSubmenu(item.id)}
                >
                  <img className={styles.menuIcon} src={item.icon} alt="" />
                  <span className={styles.menuText}>{item.name}</span>
                </div>
                {item.submenu ?
                  <div className={styles.submenu}>
                    {item.submenu.map((subItem, index) => (
                      <div className={styles.menuItem} key={index}>
                        <div className={classNames(
                          styles.menuItemWrapper,
                          { [styles.active]: activeSection === subItem.id }
                        )}
                          onClick={() => menuItemClickHandler(subItem.id)}
                        >
                          {subItem.type === 'monitor' ?
                            <div className={classNames(styles.monitorIcon, { [styles.monitorActive]: subItem.icon === 'active' })}></div> :
                            <img className={styles.menuIcon} src={subItem.icon} alt="" />
                          }
                          <span className={styles.menuText}>{subItem.name}</span>
                        </div>
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