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
    // Will add a todo item to the state list
    addTodo: (state, action) => {
      const { itemInfo } = action.payload;
      state.list.items.push(itemInfo);
    },
    // Will remove an item from the list
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      );
    },
    // Will set a specific item to done using the index
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload;
      state.list.items[itemIndex].done = done;
    }
  }
});