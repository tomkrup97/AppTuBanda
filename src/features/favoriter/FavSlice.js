import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
  name: 'bands',
  initialState: {
    favoriteBands: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteBands.push(action.payload);
      console.log(state)
    },
    removeFromFavorites: (state, action) => {
      state.favoriteBands = state.favoriteBands.filter((band) => band.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favSlice.actions;

export default favSlice.reducer;
