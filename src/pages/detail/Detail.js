import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { Reservation } from "../../components/reservation/Reservation";
import { Navbar } from "../../components/navbar/Navbar";
import { useParams } from "react-router";
import { classroomReservation } from "../../api/reservationApi";
import { classRoomInfo } from "../../api/classroomApi";

export const Detail = () => {
  const params = useParams();
  const [reservations, setReservations] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    classroomReservation(params.classid)
      .then((res) => {
        setReservations(res);
      })
      .catch((err) => {});

    classRoomInfo(params.classid)
      .then((res) => {
        setInfo(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.detail}>
        <div className={styles.box}>
          <div className={styles.header}>
            <div id={styles.title}>{info.name}</div>
            <div id={styles.btn}>{"예약하기"}</div>
          </div>
          <div className={styles.reservation}>
            <div className={styles.wrap}>
              {reservations.map((ele) => (
                <Reservation info={ele} />
              ))}
            </div>
            <div className={styles.info}>Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};
