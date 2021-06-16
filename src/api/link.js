import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:4001/api",
    headers: {
        "Content-Type": "application/json",
    },
});