import React, { useEffect, useState } from 'react'
import styles from './Reservation.module.css'

export const Reservation = (props) => {
  const [stDate, setStDate] = useState();
  const [edDate, setEdDate] = useState();

  useEffect(() => {
    setStDate(new Date(props.info.start));
    setEdDate(new Date(props.info.end));
  }, [props]);

  const formatDate = (date) =>{
    if (date) {
      return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}시`;
    }
  }

  return (
    <div className={styles.box}>
      <div id={styles.date}>{formatDate(stDate)}</div>
      <div id={styles.time}>{formatDate(edDate)}</div>
    </div>
  )
}
