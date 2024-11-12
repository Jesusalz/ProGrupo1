import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // API de productos desde el archivo .env
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

// Función para obtener imágenes de Pixabay
export const getPixabayImages = async (query, limit = 8) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: import.meta.env.VITE_PIXABAY_API_KEY,  // API key de Pixabay desde el archivo .env
        q: query,
        per_page: limit,
      },
    });
    return response.data.hits;  // Devuelve las imágenes encontradas
  } catch (error) {
    console.error('Error fetching images from Pixabay:', error);
    throw error;  
  }
};

export default api;
