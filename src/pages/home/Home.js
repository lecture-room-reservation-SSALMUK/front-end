import React from "react";
import styles from "./Home.module.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Detail } from "../detail/Detail";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Detail />
    </div>
  );
};
