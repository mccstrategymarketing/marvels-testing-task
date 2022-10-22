import axios from "axios";

const baseServer = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default baseServer;
