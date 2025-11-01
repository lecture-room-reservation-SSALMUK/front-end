import React, { useState } from "react";
import styles from "./Login.module.css";
import { InputBox } from "../../components/inputBox/InputBox";
import { useNavigate } from "react-router";
import { login } from "../../api/userApi";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUserId, setLoginUserId] = useState("");
  const [loginUserPw, setLoginUserPw] = useState("");

  const loginAcc = () => {
    const user = {
      userid: loginUserId,
      password: loginUserPw
    }
    login(user);
  };

  return (
    <div className={styles.login}>
      <div className={styles.box}>
        <div className={styles.title}>{"Login"}</div>
        <div className={styles.menu}>
          <InputBox
            type={"text"}
            txt={"아이디를 입력해주세요"}
            setValue={setLoginUserId}
          />
          <InputBox
            type={"password"}
            txt={"비밀번호를 입력해주세요"}
            setValue={setLoginUserPw}
          />
          <div
            id={styles.etc}
            onClick={() => {
              navigate(`/register`);
            }}
          >
            {"회원가입 >"}
          </div>
        </div>
        <div className={styles.btn} onClick={() => loginAcc()}>
          {"로그인"}
        </div>
      </div>
    </div>
  );
};
