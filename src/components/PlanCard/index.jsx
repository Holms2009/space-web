import { useEffect, useState } from 'react';
import styles from './PlanCard.module.css';
import { filterAvailableOs, getCategoryIcon, getCPUFrequency, getOsSelectOptions, getPanelSelectOptions } from './utils';
import { Button, Select } from '../../shared/ui-kit';

export function PlanCard({ plan, selectPanel, selectOs }) {
  const panelSelectOptions = getPanelSelectOptions(selectPanel);

  const [osSelectOptions, setOsSelectOptions] = useState(getOsSelectOptions(selectOs));
  const [selectedPanel, setSelectedPanel] = useState(panelSelectOptions[0]);
  const [selectedOs, setSelectedOs] = useState(osSelectOptions[0]);

  useEffect(() => {
    const filteredOs = filterAvailableOs(selectOs, selectedPanel.id);
    const filteredOptions = getOsSelectOptions(filteredOs);

    setOsSelectOptions(filteredOptions);
    setSelectedOs(filteredOptions[0]);
  }, [selectedPanel, selectOs])

  function panelSelectHandler(option) {
    setSelectedPanel(option);
  }

  function osSelectHandler(option) {
    setSelectedOs(option);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={getCategoryIcon(plan.category)} alt="" />
        <span className={styles.planName}>{plan.name}</span>
      </div>
      <p className={styles.price}>{`${plan.price_per_month} ₽/мес`}</p>
      <div className={styles.specs}>
        <div className={styles.specsItem}>
          <span className={styles.caption}>CPU</span>
          <span className={styles.specsValue}>{`${plan.cpu_cores} x ${getCPUFrequency(plan.category)}`}</span>
        </div>
        <div className={styles.specsItem}>
          <span className={styles.caption}>RAM</span>
          <span className={styles.specsValue}>{`${plan.ram} МБ`}</span>
        </div>
        <div className={styles.specsItem}>
          <span className={styles.caption}>DISK</span>
          <span className={styles.specsValue}>{`${plan.volume_disk} ${plan.disk_type}`}</span>
        </div>
        <div className={styles.panel}>
          <span className={styles.caption}>Программное обеспечение</span>
          <Select options={panelSelectOptions} selected={selectedPanel.name} selectHandler={panelSelectHandler} />
        </div>
        {osSelectOptions.length !== 0 &&
          <div className={styles.os}>
            <span className={styles.caption}>Дистрибутив</span>
            <Select options={osSelectOptions} selected={selectedOs.name} selectHandler={osSelectHandler} />
          </div>
        }
        <div className={styles.dataCenters}>
          <span className={styles.caption}>Дата-центр</span>
        </div>
        <div className={styles.bonus}>
          <span className={styles.plusIcon}></span>
          <ul className={styles.bonusList}>
            <li className={styles.bonusItem}>2 IP-адреса (lPv4 + lPv6)</li>
            <li className={styles.bonusItem}>3 резервных копии</li>
          </ul>
        </div>
        <Button text="Заказать" width100/>
      </div>
    </div>
  )
}