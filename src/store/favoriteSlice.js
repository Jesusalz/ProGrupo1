import { createSlice } from '@reduxjs/toolkit';

const loadFav = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: loadFav(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items)); // Guardar en localStorage
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items)); // Guardar en localStorage
    },
    clearFavorites: (state) => {
      state.items = [];
      localStorage.removeItem('favorites'); // Limpiar localStorage
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;