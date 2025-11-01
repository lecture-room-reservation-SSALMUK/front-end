import React from 'react'
import styles from './Item.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Item = () => {
  return (
    <div className={styles.item}>
      <div id={styles.txt}>201호</div>
      <div id={styles.icon}><FontAwesomeIcon icon={faChevronRight} /></div>
    </div>
  )
}
