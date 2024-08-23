import React from 'react'
import styles from './InputField.module.scss'
import { InputFieldProps } from './InputField.types'

const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  onChange,
  onKeyDown,
  type = 'text',
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={styles.input}
    />
  )
}

export default InputField
