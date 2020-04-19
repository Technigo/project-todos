import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    // key: Date.now(),
    name: "My todo list",
    items: [],
  },
};


/* const initialState = {
  list: {
    name: "Test list",
    items: [
      {
        id: Date.now(),
        description: "This is a test todo",
        done: false,
      },
    ],
  },
}; */

export const tasks = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    // Will add a todo item to the state list
    addTodo: (state, action) => {
      const { itemInfo } = action.payload;
      state.list.items.push(itemInfo);
    },

    // Will set a specific item to done using the index
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload;
      state.list.items[itemIndex].done = done;
    },
    // Will remove an item from the list
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      );
    },
    // Remove all - clean the stet to initial 0 value:
    removeAllTasks: (state) => {
      state.list.items = [];
    },
  },
});
// Reducers needed:
// addTask
// removeTask
// setDone
// option: rensa listan? Remove All info from state []
