import axios from "axios";

// NOTE:
// Agar Expo ko SAME laptop ke browser me chala rahe ho (web),
// to 127.0.0.1 chalega.
// Agar phone se test karoge, to yahan apne laptop ka IP daalna hoga, jaise:
// const API_BASE_URL = "http://192.168.1.5:8000";
const API_BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
