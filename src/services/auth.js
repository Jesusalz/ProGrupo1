import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async(datos) =>{
    return await axios.post(`${API_URL}/auth/register`, datos)
}

export const loginUser = async (credentials) => {
    return await axios.post(`${API_URL}/auth/login`, credentials);
}

export const me = async (token) => {
    return await axios.post(`${API_URL}/auth/me`, { token }); 
}