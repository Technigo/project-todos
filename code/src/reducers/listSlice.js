import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items = [action.payload, ...state.items];
    },

    removeTask: (state, action) => {
      state.items = [...state.items.filter((item) => item.id !== action.payload)];
    },

    toggleStatus: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    },

    resetList: () => {
      return initialState;
    },
  },
});
