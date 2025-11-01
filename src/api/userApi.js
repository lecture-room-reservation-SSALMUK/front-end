import axios from "axios";
import { getCookie } from "../utils/cookie";

export const login = async (data) => {
  const res = await axios.post(`/auth/login`, data);
  return res.data;
}

export const register = async (data) => {
  const res = await axios.post(`/auth/register`, data);
  return res.data;
}

export const logout = async () => {
  const res = await axios.post(`/auth/logout`);
  return res.data;
}