import React from 'react'
import styles from './input-styles.module.scss'
const Input = ({placeholder = 'Hello world'}) => (
  <input className={styles.main} placeholder={placeholder}/>
)
export default Input

