import React from 'react'
import styles from './styles.module.css'

export interface Props {
  text: string
}

export const Example = ({ text }: Props) => {
  console.log('test')
  return <div className={styles.test}>Example Component: {text}</div>
}
