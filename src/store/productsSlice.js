import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../services/api';  

// Acción asíncrona para obtener los productos
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getProducts();  
    return data.products;  
  }
);

// slice para manejar el estado de los productos
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
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
