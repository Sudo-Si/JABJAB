import axios from "axios";


export const axiosInstance = axios.create({
    baseURL : "https://jab.herokuapp.com/api/"
})