import axios from "axios";

const { VITE_APP_SERVER_PORT } = import.meta.env;


const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MjUyNjM5LCJpYXQiOjE2ODgwNDMwMzksImp0aSI6IjI5YzgyNTRjYjkxMjQ2MzU5Y2Q1ZjJlYThiNmI2MjIwIiwidXNlcl9pZCI6N30.VUcajKEyZ7IeI_Rh85Lya1DbI41dHotZp4vRg1WKlWE"

const instance = axios.create({
    baseURL: VITE_APP_SERVER_PORT + "/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`,
    },
});

export default instance;
