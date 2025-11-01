import axios from "axios";
axios.defaults.withCredentials = true;

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

export const isLogined = async () => {
  const res = await axios.get(`${url}/isLoggedIn`);
  return res.data;
}