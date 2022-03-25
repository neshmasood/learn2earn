import tellLearn2earnTo from "./axios.config";

const auth = "/auth"
const users = "/users"

const register = async (data) => {
    return tellLearn2earnTo
        .post(`${auth}/register`, data)
        .then((res)=> {
            console.log(res)
        });
}

const login = async (email, password) => {
    try {
        return tellLearn2earnTo
        .post(`${auth}/login`, {email, password})
        .then((res) => {
            console.log(res)
            if(res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data.token))
                localStorage.setItem("userId", res.data.userId)
            }
            return res.data.token
        })
    } catch (err) {
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("user")
    return JSON.parse(user)
}

const getProfile = () => {
    let userId = localStorage.getItem("userId")
    return tellLearn2earnTo.get(`${users}/${userId}`)
}

const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("userId")
}

export {register, login, currentUser, getProfile, logout} 

