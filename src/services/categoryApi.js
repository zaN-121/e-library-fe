import api from "../config/api"

export const getCategories = () => {
    return api.get('/category')
}