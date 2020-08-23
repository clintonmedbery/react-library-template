import React from 'react'
import styles from './button-styles.module.scss'
const Button = ({message = 'Hello world'}) => (
  <button className={styles.main}>{message}</button>
)
export default Button

