import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"               //sir wtspil send aakiya notepadilninn eduthad
  });

  export default instance;