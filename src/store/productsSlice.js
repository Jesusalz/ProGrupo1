import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../services/api';  

// Acción asíncrona para obtener los productos
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts();
      return Array.isArray(data.products) ? data.products : [];
    } catch (error) {
      // Retorna un mensaje de error 
      return rejectWithValue('Error al cargar los productos');
    }
  }
);

// Slice para manejar el estado de los productos
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Error desconocido'; 
      });
  },
});

export default productsSlice.reducer;

