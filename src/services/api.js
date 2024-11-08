import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // API desde el archivo .env
  headers: {
    "Content-Type": "application/json",  
  },
});

// Función para obtener los productos
export const getProducts = async (limit = 8, skip = 1) => {
  try {
    const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;  
  }
};

// Función para obtener los detalles de un producto por ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;  
  }
};

export default api;
