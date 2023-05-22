import axios from "axios";

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "Application/json"
    }
})

export default axiosInstance