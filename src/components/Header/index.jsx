import styles from './Header.module.css';
import { ThemeToggle } from '../ThemeToggle';

export function Header({ showThemeToggle, onBurgerClick }) {
  function burgerClickHandler() {
    onBurgerClick && onBurgerClick(!showThemeToggle);
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.desktopBar}>
        <ThemeToggle isVisible={showThemeToggle} />
      </div>
      <div className={styles.burger} onClick={burgerClickHandler}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={styles.navMenu}>
        <span className={styles.balance}>0P</span>
        <button className={styles.userBtn}>
          <span className={styles.noticeIcon}></span>
          <span className={styles.userName}>username</span>
          <span className={styles.arrowIcon}></span>
        </button>
        <button className={styles.signOut}>Выйти</button>
      </div>
    </header>
  )
}