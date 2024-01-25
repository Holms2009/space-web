import styles from './Footer.module.css';

import google from '../../assets/images/google_play.svg';
import apple from '../../assets/images/app_store.svg';

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.info}>
        <ul className={styles.list}>
          <li className={styles.listItem}>© 2001–2023 ООО <a className={styles.link} href="#">«СпейсВэб»</a></li>
          <li className={styles.listItem}>Все права защищены.</li>
          <li className={styles.listItem}>Лицензия <a className={styles.link} href="#">№163230</a></li>
          <li className={styles.listItem}><a className={styles.link} href="#">API SpaceWeb</a></li>
        </ul>
      </div>
      <div className={styles.links}>
        <span className={styles.listItem}>Скачать приложение</span>
        <div className={styles.linksWrapper}>
          <a className={styles.appLink} href="#" target='_blank' rel='noreferrer noopener'>
            <img src={google} alt="Ссылка на скачивание приложения в Google Play" />
          </a>
          <a className={styles.appLink} href="#" target='_blank' rel='noreferrer noopener'>
            <img src={apple} alt="Ссылка на скачивание приложения в App Store" />
          </a>
        </div>
      </div>
      <div className={styles.phones}>
        <ul className={styles.list}>
          <li className={styles.listItem}><a className={styles.link} href="#">+7 (812) 334-12-22</a>(в Санкт-Петербурге)</li>
          <li className={styles.listItem}><a className={styles.link} href="#">+7 (495) 663-16-12</a>(в Москве)</li>
          <li className={styles.listItem}><pre>&nbsp;<a className={styles.link} href="#">8(800)100-16-15</a>(бесплатно по России)</pre></li>
        </ul>
      </div>
    </footer>
  )
}