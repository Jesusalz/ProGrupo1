import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import userSlice from './authSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userSlice,
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
