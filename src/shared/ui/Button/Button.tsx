import { ButtonProps } from './Button.types'
import cn from 'clsx'

import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ children, isActive = false, className, ...props }) => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.active]: isActive,
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
