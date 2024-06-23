import axios from "axios";

const api=axios.create({
    baseURL:'https://task-buddy-backend.vercel.app/api'
});

export default api;