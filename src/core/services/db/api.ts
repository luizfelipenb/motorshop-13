import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-m6.herokuapp.com/",
});

export default api;
