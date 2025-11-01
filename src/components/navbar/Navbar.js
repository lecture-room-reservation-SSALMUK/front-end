import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { List } from "../list/List";

export const Navbar = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate(`/login`);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>Logo</div>
        </div>
        <div className={styles.feature}>
          <div className={styles.loginBtn} onClick={() => toLogin()}>
            <span id={styles.txt}>{"로그인"}</span>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <div id={styles.subtitle}>List</div>
        <List />
      </div>
    </div>
  );
};
