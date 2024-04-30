import axios from "axios";

export const BASE_URL = "http://localhost:3005/v1";

export const Instance = axios.create({
  baseURL: BASE_URL,
});
