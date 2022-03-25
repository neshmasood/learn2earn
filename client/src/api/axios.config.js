import axios from "axios";


const backendAPI = "https://dev-learn2earn-app.herokuapp.com/api";

const user = JSON.parse(localStorage.getItem("user"))

const tellLearn2earnTo = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type" : "application/json",
        authorization: `Bearer ${user}`
    },
});

export default tellLearn2earnTo;