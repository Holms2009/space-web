import classNames from 'classnames';
import { useRef, useState } from 'react';

import styles from './Select.module.css';

import { useOutsideClickClose } from '../../lib/hooks';

export function Select({ options, selected, selectHandler }) {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    setIsOpened(!isOpened);
  }

  function handleOptionSelect(selected) {
    selectHandler(selected);
    setIsOpened(false);
  }

  useOutsideClickClose(ref, setIsOpened);

  return (
    <div className={styles.wrapper} ref={ref} onClick={handleClick}>
      <p className={styles.selected} >{selected || 'Выбор...'}</p>
      <div className={classNames(styles.options, { [styles.opened]: isOpened })}>
        {options && options.map((option) => (
          <div
            className={classNames(styles.option, { [styles.active]: option.name === selected })}
            onClick={() => handleOptionSelect(option)}
            key={option.id}
          >
            {option.name}
          </div>
        ))}
      </div>
      <span className={styles.arrow}></span>
    </div>
  )
}
