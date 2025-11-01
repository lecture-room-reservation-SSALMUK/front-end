import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Reservation } from "../../components/reservation/Reservation";
import { myReservation } from "../../api/reservationApi";

export const MyPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    myReservation().then((res) => {
      setReservations(res);
    })
  }, []);

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.box}>
        <div className={styles.header}>
          <div id={styles.title}>{"내 예약 정보"}</div>
        </div>
        <div className={styles.reservation}>
          <div className={styles.wrap}>
            {reservations.map((ele) => (
              <Reservation key={ele.id} info={ele} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
