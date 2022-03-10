import axios from "axios";

const dishesClient = axios.create({
    baseURL: ''
});

export default dishesClient;