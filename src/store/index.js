import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import userSlice from './authSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userSlice
  },
});

export default store;
