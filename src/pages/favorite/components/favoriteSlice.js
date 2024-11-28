import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    },
    setFavorites: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;