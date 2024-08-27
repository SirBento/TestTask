import axios from "axios";

const localURI = `http://localhost:1234/api/v1`;


export const Axios = axios.create({
    baseURL: localURI,
    withCredentials: true 
});