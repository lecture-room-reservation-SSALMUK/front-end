import React, { useEffect, useRef, useState } from "react";
import styles from "./Detail.module.css";
import { Reservation } from "../../components/reservation/Reservation";
import { Navbar } from "../../components/navbar/Navbar";
import { useParams } from "react-router";
import { classroomReservation, reservation } from "../../api/reservationApi";
import { classRoomInfo } from "../../api/classroomApi";

export const Detail = () => {
  const params = useParams();
  const [reservations, setReservations] = useState([]);
  const [info, setInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div id={styles.btn} onClick={() => setIsModalOpen(true)}>
              예약하기
            </div>
          </div>
          <div className={styles.reservation}>
            <div className={styles.wrap}>
              {reservations.map((ele) => (
                <Reservation key={ele.id} info={ele} />
              ))}
            </div>
            <div className={styles.info}>
              <div id={styles.infoTitle}>위치</div>
              <div id={styles.desc}>{info.position}</div>
              <div id={styles.infoTitle}>최대 수용가능</div>
              <div id={styles.desc}>{info.maximum}명</div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ReservationModal
          classid={params.classid}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

const ReservationModal = ({ classid, onClose }) => {
  const [stRef, setStRef] = useState("");
  const [edRef, setEdRef] = useState("");
  const sthourRef = useRef();
  const edhourRef = useRef();

  const hourOption = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const handleSubmit = () => {
    const startDate = new Date(stRef);
    const endDate = new Date(edRef);

    const stTime = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate(),
      parseInt(sthourRef.current.value),
      0
    );

    const edTime = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate(),
      parseInt(edhourRef.current.value),
      0
    );

    if (stTime.getTime() && edTime.getTime()) {
      reservation(classid, { start: stTime, end: edTime })
        .then((res) => {
          alert("예약 성공");
          onClose();
        })
        .catch((err) => alert("예약 실패"));
    } else {
      alert("입력을 다시 확인해주세요");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h3>예약 정보 입력</h3>

        <div className={styles.modalInput}>
          <div className={styles.descTime}>시작시간</div>
          <div className={styles.dateInput}>
            <input type="date" onChange={(e) => setStRef(e.target.value)} />
          </div>
          <div className={styles.hourSelect}>
            <select ref={sthourRef}>
              {hourOption.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}시
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.modalInput}>
          <div className={styles.descTime}>종료시간</div>
          <div className={styles.dateInput}>
            <input type="date" onChange={(e) => setEdRef(e.target.value)} />
          </div>
          <div className={styles.hourSelect}>
            <select ref={edhourRef}>
              {hourOption.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}시
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.modalButtons}>
          <button onClick={handleSubmit}>확인</button>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};
