import axios from "axios";

const { token } = JSON.parse(localStorage.getItem("current_user") || "{}");

export const api = axios.create({
  baseURL: "http://localhost:3001",
});
api.interceptors.request.use((config) => {
  return config;
});

if (token) {
  api.defaults.headers["authorozation"] = `Bearer ${token}`;
}