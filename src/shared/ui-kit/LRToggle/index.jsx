import { useEffect, useRef, useState } from 'react';
import styles from './LRToggle.module.css';
import classNames from 'classnames';

export function LRToggle({ values, active, onClick }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [toggleWidth, setToggleWidth] = useState(0);

  useEffect(() => {
    const newWidth = isActive(values[0]) ? getElWidth(leftRef.current) : getElWidth(rightRef.current);

    setToggleWidth(newWidth);
  }, [active]);

  function clickHandler(value) {
    onClick && onClick(value);
  }

  function getElWidth(el) {
    return el.getBoundingClientRect().width;
  }

  function isActive(value) {
    return value.id === active.id;
  }

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.left, {[styles.isActive]: isActive(values[0])})} onClick={() => clickHandler(values[0])} ref={leftRef}>
        {values[0].name}
      </div>
      <div className={classNames(styles.right, {[styles.isActive]: isActive(values[1])})} onClick={() => clickHandler(values[1])} ref={rightRef}>
        {values[1].name}
      </div>
      <div
        className={classNames(styles.toggle, { [styles.toRight]: isActive(values[1]) })}
        style={{ maxWidth: toggleWidth + 'px' }}
      />
    </div>
  )
}