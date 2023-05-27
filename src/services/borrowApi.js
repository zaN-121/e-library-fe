import api from "../config/api";
import {getToken} from "../util/token";

export const getBorrow = (params) => {
    return api.get("/borrow/state", {
        params: {
            ...params
        },
        headers: {
            Authorization: getToken()
        }
    })
}

export const getBorrowHistory = () => {
    return api.get('/borrow', {
        headers: {
            Authorization: getToken()
        }
    })
}
export const approveBorrow = (borrowId) => {
    return api.put(`/borrow/val/${borrowId}`, {}, {
        headers: {
            Authorization: getToken()
        }
    })
}

export const returnBook = (borrowId) => {
    return api.put(`/borrow/return/${borrowId}`,{}, {
        headers: {
            Authorization: getToken()
        }
    })
}