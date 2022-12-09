import axios from "axios";
export let APP_URL: string;

// if (typeof window === "undefined") {
//   APP_URL = "https://tashbus.technocorp.uz/";
// } else {
//   APP_URL = "https://tashbus.technocorp.uz/";
// }

if (typeof window === "undefined") {
  APP_URL = "http://127.0.0.1:8000/";
} else {
  APP_URL = "http://127.0.0.1:8000/";
}

const $api = axios.create({ baseURL: APP_URL, withCredentials: true });

export default $api;
