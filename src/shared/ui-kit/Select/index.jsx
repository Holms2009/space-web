import classNames from 'classnames';
import { useRef, useState } from 'react';

import styles from './Select.module.css';

import { useOutsideClickClose } from '../../lib';

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
    <button className={classNames(styles.wrapper, { [styles.hasText]: !!selected })} ref={ref} onClick={handleClick}>
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
      <svg className={styles.arrow} width="16" height="17" viewBox="0 0 16 17" fill="#B7C3D2" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.63599" y="6.0116" width="1" height="9" rx="0.5" transform="rotate(-45 1.63599 6.0116)" />
        <rect x="13.6567" y="5.30444" width="1" height="9" rx="0.5" transform="rotate(45 13.6567 5.30444)" />
      </svg>
    </button>
  )
}
