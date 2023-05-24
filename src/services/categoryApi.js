import api from "../config/api"

export const getCategories = (params) => {
    return api.get("/category", {params: {page: params}})
}