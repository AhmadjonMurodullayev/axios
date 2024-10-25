import axios from "axios";

const request = axios.create({ baseURL: import.meta.env.VITE_LATES});

export default request