import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(card => card.id !== payload);
    },
  },
});

export const cardReducer = cardSlice.reducer;
export const { addToFavorites, removeFromFavorites } = cardSlice.actions;
