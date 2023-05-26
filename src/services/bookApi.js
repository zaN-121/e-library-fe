import api from "../config/api"
import { getToken } from "../util/token"

export const getBooks = (params) => api.get("/book", {params: {page: params}})

// export const getBooks = () => api.get("/book")

export const getBookById = (params) => api.get(`/book/${params}`)

export const addBook = (data) => {
    return api.post("/book", data, {
        headers: {
            "Content-type": 'multipart/form-data',
            "Authorization": getToken()
        }
    })
}

export const updateBookById = (data) => {
    return api.put(`/book/${data.bookId}`, data, {
        headers: {
            "Authorization": getToken()
        }
    })
}

export const deleteBookById = (id) => api.delete(`/book/${id}`)
