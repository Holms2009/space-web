import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SideBar.module.css';

import { ThemeToggle } from '../ThemeToggle';
import { menu } from '../../shared/config/sideBar';
import { setActiveSection } from '../../app/store';

export function SideBar({ isOpened }) {
  const { activeSection } = useSelector(state => state.app)
  const dispatch = useDispatch();

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