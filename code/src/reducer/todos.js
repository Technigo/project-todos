import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "my first todo", isComplete: false },
    { id: 2, name: "my second todo", isComplete: true },
    { id: 3, name: "my third todo", isComplete: false },
  ],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeItem: (store, action) => {
      const itemId = action.payload;
      // console.log({itemId})
      const filteredList = store.items.filter((item) => item.id !== itemId);
      store.items = filteredList;
    },

    removeAllItems: (store, action) => {
      store.items = [];
    },

    addItem: (store, action) => {
      const setId = () => {
        if (store.items.length === 0) return 1;
        else return Math.max(...store.items.map((item) => item.id)) + 1;
      };

      const newItem = {
        id: setId(),
        name: action.payload,
        isComplete: false,
      };

      const newItemsList = [...store.items, newItem];
      store.items = newItemsList;
    },

    toggleComplete: (store, action) => {
      const itemId = action.payload;      
      const currentTodo = store.items.find((item) => item.id === itemId)
      // If the task is already completed set isCompleted to false, otherwise to true
      currentTodo.isComplete = !currentTodo.isComplete
    },
  },
});
