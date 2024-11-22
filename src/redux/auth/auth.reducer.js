import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  id: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
      state.id = payload.id;
      state.token = payload.token;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
