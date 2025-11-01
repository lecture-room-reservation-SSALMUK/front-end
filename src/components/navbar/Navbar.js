import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { List } from "../list/List";
import { getCookie } from "../../utils/cookie";

export const Navbar = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate(`/login`);
  };

  const toMyPage = () => {
    navigate(`/myPage`);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>Logo</div>
        </div>
        <div className={styles.feature}>
          {getCookie() ? (
            <div className={styles.loginBtn} onClick={() => toMyPage()}>
              <span id={styles.txt}>{"내정보"}</span>
            </div>
          ) : (
            <div className={styles.loginBtn} onClick={() => toLogin()}>
              <span id={styles.txt}>{"로그인"}</span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.list}>
        <div id={styles.subtitle}>List</div>
        <List />
      </div>
    </div>
  );
};
