import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const initialState = {
  items: [],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
     addItem: {
      reducer(state, action) {
        state.items = [...state.items, action.payload];
      },
      prepare(name) {
        return {
          payload: {
            id: uniqid(),
            name: name,
            isCompleted: false,
          },
        };
      },
    },
    removeItem: (state, action) => {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.items = filteredItems;
    },
    toggleComplete: (state, action) => {
      const updatedArray = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        } else {
          return item;
        }
      });

      state.items = updatedArray;
    },
  },
});
