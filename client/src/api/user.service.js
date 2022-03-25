import tellLearn2earnTo from "./axios.config";

const users = "/users"

const getAll = () => {
    return tellLearn2earnTo.get(`${users}`)
}

const getOne = (id) => {
    return tellLearn2earnTo.get(`${users}/${id}`)
}

const update = (id, data) => {
    return tellLearn2earnTo.put(`${users}/${id}`, data)
}

const destroy = (id) => {
    return tellLearn2earnTo.delete(`${users}`, id)
}

export {getAll, getOne, update, destroy}