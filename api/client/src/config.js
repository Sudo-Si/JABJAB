import axios from "axios";


export const axiosInstance = axios.create({
    baseURL : "https://just-anotherblog.herokuapp.com/api/"
});