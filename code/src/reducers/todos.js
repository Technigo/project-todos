import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "Test List",
    items: [

      {
        description: "Create To-do app",
        done: false
      },

      {
        description: "Book a summer trip",
        done: false
      }
      
    ]
  },
};

export const todos = createSlice( {
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload;
      state.list.items.push(itemInfo);
    },
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload;
      state.list.items[itemIndex].done = done;
    },
    removeTodo: (state, action) => {
      const itemToRemove = action.payload;
      state.list.items.splice(itemToRemove, 1);
    },

  }
});