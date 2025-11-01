import axios from "axios";
import { getCookie } from "../utils/cookie";

const url = `${process.env.REACT_APP_SERVER_API_URL}/reservate`;

export const myReservation = async () => {
  const res = await axios.get(`${url}`, {
    headers: {
      Authorization: `${getCookie("Authorization")}`,
    },
  });
  return res.data;
};

export const classroomReservation = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};

export const reservation = async (id, data) => {
  const res = await axios.post(`${url}/${id}`, data, {
    headers: {
      Authorization: `${getCookie("Authorization")}`,
    },
  });
  return res.data;
};

export const deleteReservation = async (id) => {
  const res = await axios.delete(`${url}/${id}`, {
    headers: {
      Authorization: `${getCookie("Authorization")}`,
    },
  });
  return res.data;
};
