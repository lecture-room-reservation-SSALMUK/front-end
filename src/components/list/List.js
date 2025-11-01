import React from 'react'
import styles from './List.module.css'
import { Item } from '../item/Item'

export const List = () => {
  return (
    <div className={styles.list}>
      <Item />
      <Item />
      <Item />
    </div>
  )
}
