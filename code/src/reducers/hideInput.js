/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const hideInputField = createSlice({
  name: 'hideInputField',
  initialState,
  reducers: {
    hide: (store, action) => {
      store.hide = !store.hide;
    }
  }
});
