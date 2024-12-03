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

export const searchProducts = async (query, limit = 10) => {
  try {
    const response = await api.get('/products/search', {
      params: { 
        search: query, 
        limit: limit 
      }
    });
    return response.data;  
  } catch (error) {
    console.error('Error searching products:', error);
    return { products: [] };
  }
};
export {
  api as default
};


