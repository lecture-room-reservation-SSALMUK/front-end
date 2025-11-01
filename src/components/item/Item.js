import React, { useEffect, useState } from 'react'
import styles from './Item.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

export const Item = (props) => {
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItem(props.info);
    setLoading(false);
  }, [])

  const detailToItem = () => {
    navigate(`/detail/${item.id}`);
  }

  return loading ? <></> : (
    <div className={styles.item} onClick={() => detailToItem()}>
      <div id={styles.txt}>{item.name}</div>
      <div id={styles.icon}><FontAwesomeIcon icon={faChevronRight} /></div>
    </div>
  )
}
