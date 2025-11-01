import React from "react";
import styles from "./List.module.css";
import { Item } from "../item/Item";

export const List = () => {
  const dummyData = [
    {
      id: "SD223SSD2SD2",
      name: "410호",
      position: "공과대학 5호관 4층",
      maximum: "30명",
    },
  ];
  return (
    <div className={styles.list}>
      {dummyData.map((ele) => (
        <Item info={ele} />
      ))}
    </div>
  );
};
