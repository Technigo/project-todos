import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    removeItem: (store, action) => {
      const itemId = action.payload;
      const filteredList = store.items.filter((item) => item.id !== itemId);
      store.items = filteredList;
    },

    removeAllItems: (store, action) => {
      store.items = [];
    },

    removeCompleted: (store, action) => {
      const filteredList = store.items.filter((item) => !item.isComplete);
      store.items = filteredList;
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
      const currentTodo = store.items.find((item) => item.id === itemId);
      // If the task is already completed set isCompleted to false, otherwise to true
      currentTodo.isComplete = !currentTodo.isComplete;
    },
  },
});
