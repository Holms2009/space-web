import classNames from 'classnames';
import styles from './Button.module.css';

export function Button({ text, width100, disabled, onClick }) {
  function clickHandler() {
    onClick && onClick();
  }

  return (
    <button
      className={classNames(styles.wrapper, { [styles.fullWidth]: width100 })}
      disabled={disabled}
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}