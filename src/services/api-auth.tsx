import axios from "axios";

const apiAuth = axios.create({
  baseURL: "https://sentinela.herokuapp.com/",
});
export default apiAuth;
