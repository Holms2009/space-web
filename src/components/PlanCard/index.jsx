import styles from './PlanCard.module.css';
import { getCategoryIcon } from './utils';

export function PlanCard({data}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={getCategoryIcon(data.category)} alt="" />
        <span className={styles.planName}>{data.name}</span>
      </div>
    </div>
  )
}