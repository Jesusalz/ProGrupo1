import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import userSlice from './authSlice';
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userSlice,
    cart: cartReducer,
    favorites: favoriteReducer,
  },
  preloadedState: {
    cart: {
      items: [],
      total: 0
    }
  }
});

export default store;