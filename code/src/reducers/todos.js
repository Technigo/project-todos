import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "To do list",
    items: [
      {
        description: "What to do?",
        done: false
      }
    ]
  }
};

export const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { itemInfo } = action.payload;
      state.list.items.push(itemInfo);
    },

    removeTodo: (state, action) => {
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      );
    },

    setDone: (state, action) => {
      const { itemIndex, done } = action.payload;
      state.list.items[itemIndex].done = done;
    },

    removeAll: (state) => {
      state.list.items = [];
    },
  },
});