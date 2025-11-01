import React, { useState } from "react";
import styles from "./Register.module.css";
import { InputBox } from "../../components/inputBox/InputBox";
import { useNavigate } from "react-router";
import { register } from "../../api/userApi";

export const Register = () => {
  const navigate = useNavigate();
  const [registerUserId, setRegisterUserId] = useState("");
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerUserClassNum, setRegisterUserClassNum] = useState("");
  const [registerUserMajor, setRegisterUserMajor] = useState("");
  const [registerUserPw, setRegisterUserPw] = useState("");
  const [registerUserRePw, setRegisterUserRePw] = useState("");

  const registerAcc = () => {
    if (registerUserPw === registerUserRePw) {
      const user = {
        userid: registerUserId,
        major: registerUserMajor,
        username: registerUserName,
        password: registerUserPw,
        classnumber: registerUserClassNum,
      }
      register({ user }).then((res) => {
        navigate('/login')
      }).catch((err) => {

      }) 
    } else {
      alert("비밀번호가 일치하지 않습니다")
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.box}>
        <div className={styles.title}>{"Register"}</div>
        <div className={styles.menu}>
          <InputBox
            type={"text"}
            txt={"아이디를 입력해주세요"}
            setValue={setRegisterUserId}
          />
          <InputBox
            type={"text"}
            txt={"이름을 입력해주세요"}
            setValue={setRegisterUserName}
          />
          <div className={styles.info}>
            <InputBox
              type={"text"}
              txt={"학번"}
              setValue={setRegisterUserClassNum}
              etc={true}
            />
            <InputBox
              type={"text"}
              txt={"학과"}
              setValue={setRegisterUserMajor}
              etc={true}
            />
          </div>
          <InputBox
            type={"password"}
            txt={"비밀번호를 입력해주세요"}
            setValue={setRegisterUserPw}
          />
          <InputBox
            type={"password"}
            txt={"비밀번호를 다시 입력해주세요"}
            setValue={setRegisterUserRePw}
          />
        </div>
        <div className={styles.btn} onClick={() => registerAcc()}>{"회원가입"}</div>
      </div>
    </div>
  );
};
