import React from 'react'
import styles from './Reservation.module.css'

export const Reservation = (props) => {
  return (
    <div className={styles.box}>
      <div id={styles.date}>{props.info.data}</div>
      <div id={styles.time}>{props.info.data}</div>
    </div>
  )
}
