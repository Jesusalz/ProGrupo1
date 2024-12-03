import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const getCategories = async (categoryPath) => { 
    return await axios.get(`${API_URL}/products/category/${categoryPath}`)
}