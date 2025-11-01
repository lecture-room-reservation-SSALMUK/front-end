import axios from "axios";
import { getCookie } from "../utils/cookie";

const url = `${process.env.REACT_APP_SERVER_API_URL}/auth`;

export const login = async (data) => {
  const res = await axios.post(`${url}/login`, data);
  return res.data;
}

export const register = async (data) => {
  const res = await axios.post(`${url}/register`, data);
  return res.data;
}

export const logout = async () => {
  const res = await axios.post(`${url}/logout`);
  return res.data;
}