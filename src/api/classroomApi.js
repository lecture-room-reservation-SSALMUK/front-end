import axios from "axios";

const url = `${process.env.RREACT_APP_SERVER_API_URL}/classroom`;

export const allClassRoom = async () => {
  const res = await axios.get(`${url}`);
  return res.data;
}

export const classRoomInfo = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
}