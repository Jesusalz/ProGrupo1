import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer
  },
  preloadedState: {
    cart: {
      items: [],
      total: 0
    }
  }
});

export default store;
