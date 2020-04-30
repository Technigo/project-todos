import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "To do list",
    items: [
      {
        description: "What to do?",
        id: Date.now(),
        done: false,
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
      itemInfo.id = Date.now()
      state.list.items.push(itemInfo)
    },


    removeTodo: (state, action) => {
      const { itemId } = action.payload;
      // Date.now() här? och hur?
      state.list.items = state.list.items.filter(
        (item) => item.id !== itemId
      );
    },

    setDone: (state, action) => {
      const { itemId, done } = action.payload;
      const item = state.list.items.find(
        (item) => item.id === itemId
      )
      item.done = done
    },


    removeAll: (state) => {
      state.list.items = [];
    },
  },
});