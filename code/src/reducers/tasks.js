import { createSlice } from "@reduxjs/toolkit";

/* const initialState = {
  list: {
    // key: Date.now(),
    name: "My todo list",
    items: [],
  },
}; */

const initialState = {
  list: {
    name: "Test list",
    items: [
      {
        id: Date.now(),
        description: "Style this App",
        done: false,
      },
      {
        id: Date.now(),
        description: "Eat more ice cream",
        done: false,
      },
      {
        id: Date.now(),
        description: "Go to the gym",
        done: true,
      },
    ],
  },
};

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
    // Remove all - clean the State/Store to initial 0 value:
    removeAllTasks: (state) => {
      state.list.items = [];
    },
  },
});
// Reducers needed:
// addTask
// removeTask
// setDone
// option: Remove All info from state []
