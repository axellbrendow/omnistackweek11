import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.143:3333",
  headers: {
    authorization: "37eb0690-c63c-4bcb-a41e-ac50915aa91a"
  }
});

export default api;
