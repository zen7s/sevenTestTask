import { ButtonProps } from './Button.types'

import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ children, isActive = false, ...props }) => {
  const buttonClassName = isActive ? `${styles.btn} ${styles['btn--active']}` : styles.btn

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
