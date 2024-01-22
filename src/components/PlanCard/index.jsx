import styles from './PlanCard.module.css';
import { getCategoryIcon } from './utils';

export function PlanCard({data}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={getCategoryIcon(data.category)} alt="" />
        <span className={styles.planName}>{data.name}</span>
      </div>
      <p className={styles.price}>{`${data.price_per_month} ₽/мес`}</p>
      <div className={styles.specs}>
        <div className={styles.specsItem}>
          <span className={styles.caption}>CPU</span>
          <span className={styles.specsValue}>{`${data.cpu_cores} x 2.8 ГГц`}</span>
        </div>
        <div className={styles.specsItem}>
          <span className={styles.caption}>RAM</span>
          <span className={styles.specsValue}>{`${data.ram} МБ`}</span>
        </div>
        <div className={styles.specsItem}>
          <span className={styles.caption}>DISK</span>
          <span className={styles.specsValue}>{`${data.volume_disk} ${data.disk_type}`}</span>
        </div>
      </div>
    </div>
  )
}