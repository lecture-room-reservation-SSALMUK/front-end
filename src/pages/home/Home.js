import React from "react";
import styles from "./Home.module.css";
import { Navbar } from "../../components/navbar/Navbar";

export const Home = () => {

  return (
    <div className={styles.home}>
      <Navbar />
    </div>
  );
};
