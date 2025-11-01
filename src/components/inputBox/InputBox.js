import React, { useState } from "react";
import styles from "./InputBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export const InputBox = ({ type, txt, setValue, etc }) => {
  const [isVisible, setIsVisible] = useState(false);

  const inputType = type === "password" && !isVisible ? "password" : "text";

  return (
    <div className={`${styles.input} ${type === "password" ? styles.pw : ""}`}>
      <input
        type={inputType}
        placeholder={txt}
        onChange={(e) => setValue(e.target.value)}
      />
      {type === "password" && (
        <div
          id={styles.icon}
          onClick={() => setIsVisible((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
        </div>
      )}
    </div>
  );
};
