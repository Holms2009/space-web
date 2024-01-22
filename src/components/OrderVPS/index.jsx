import styles from './OrderVPS.module.css';

import { Select } from '../../shared/ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionFetchPlans, setSelectedCategory } from '../../app/store';
import { makeCategoriesSelectData } from './utils';
import { PlanCard } from '../PlanCard';

export function OrderVPS() {
  const data = useSelector(state => state.plans.data);
  const selectedCategory = useSelector(state => state.plans.selectedCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) dispatch(actionFetchPlans());
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data])

  function selectHandler(value) {
    dispatch(setSelectedCategory(value));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Аккаунт</p>
        <h2 className={styles.title}>Заказать VPS</h2>
      </div>
      <div className={styles.filter}>
        <p className={styles.subtitle}>Категория</p>
        <Select
          options={makeCategoriesSelectData(data)}
          selected={selectedCategory.name}
          selectHandler={selectHandler}
        />
      </div>
      <div className={styles.cards}>
        {
          data ?
            data.vpsPlans.map((item) => (
              (selectedCategory.id === 'all' || item.category === selectedCategory.id) ?
                <PlanCard data={item} key={item.id} /> :
                null
            )) : null
        }
      </div>
    </div>
  )
}