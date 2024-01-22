import classNames from "classnames"

import styles from './Toggle.module.css';
import { useState } from "react";

export function Toggle({ onChange }) {
  const [isActive, setIsActive] = useState(false);

  function changeHandler() {
    setIsActive(!isActive);
    onChange && onChange(isActive);
  }

  return (
    <label className={classNames(styles.wrapper, { [styles.active]: isActive })}>
      <div className={styles.toggle}></div>
      <input className={styles.origin} type="checkbox" value={isActive} onChange={changeHandler}/>
    </label>
  )
}