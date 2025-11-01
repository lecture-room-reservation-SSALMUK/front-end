import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import { Item } from "../item/Item";
import { allClassRoom } from "../../api/classroomApi";

export const List = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    allClassRoom()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {console.log(err)});
  }, []);

  return loading ? <></> : (
    <div className={styles.list}>
      {data.map((ele) => (
        <Item info={ele} />
      ))}
    </div>
  );
};
