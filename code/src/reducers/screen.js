import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScreen: "todoList",
  scrollIntoView: false,
};

export const screen = createSlice({
  name: "screen",
  initialState,
  reducers: {
    currentScreen: (store, action) => {
      const { screen } = action.payload;
      store.currentScreen = screen;
    },

    scrollDownToNewitem: (store, action) => {
      const { scrollIntoView } = action.payload;
      store.scrollIntoView = scrollIntoView;
    },
  },
});
