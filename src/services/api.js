import axios from 'axios';

// Configuración base de axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",  
  },
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Funciones de productos
export const getProducts = async (limit = 9, skip = 1) => {
  try {
    const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;  
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;  
  }
};

// Función de Pixabay
export const getPixabayImages = async (query, limit = 16) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: import.meta.env.VITE_PIXABAY_API_KEY,
        q: query,
        per_page: limit,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images from Pixabay:', error);
    throw error;  
  }
};

// Funciones de autenticación
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Error en el registro' };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }
    return response.data;
  } catch (error) {
    console.error('Error en el login:', error.response?.data || error.message);
    throw error.response?.data || { message: 'Error en el inicio de sesión' };
  }
};

export {
  api as default
};
