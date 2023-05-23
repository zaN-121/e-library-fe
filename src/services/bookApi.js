import api from "../config/api"

export const getBooks = (params) => api.get("/book", {params: {page: params}})

export const getBookById = (params) => api.get(`/book/${params}`)

export const addBook = (data) => {
    return api.post("/book", data, {
        headers: {
            "Content-type": 'multipart/form-data',
        }
    })
}

export const updateBookById = (data) => {
    return api.put(`/book/${data.bookId}`, data)
}

export const deleteBookById = (id) => api.delete(`/book/${id}`)
