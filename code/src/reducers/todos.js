import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: "Complete Project", isComplete: false, category: "work" },
    { id: 2, text: "Send Email", isComplete: false, category: "work" },
    { id: 3, text: "Buy eggs", isComplete: false, category: "shopping" },
  ],
};

export const todos = createSlice({
  name: "todos",
  initialState,
  todaysDate: new Date(),
  reducers: {
    removeTodoItem: (store, action) => {
      //find item and remove it from the items array
      //store.items = store.items.filter(item => item.id !== action.payload);
      console.log(store, action);
      const todoId = action.payload;

      const filteredList = store.items.filter(item => item.id !== todoId);

      store.items = filteredList;
    },

    removeAll: (store, action) => {
      store.items = [];
      //return initialState;
    },

    AddTodoItem: (store, action) => {
      const newTodo = {
        id: Math.max(...store.items.map(item => item.id)) + 1,
        text: action.payload,
        isComplete: false,
      };

      const newTodoList = [...store.items, newTodo];

      store.items = newTodoList;
    },

    toggleIsComplete: (store, action) => {
      // const taskComplete = store.items.find((item) => item.id === action.payload)
      const foundItem = store.items.find(item => item.id === action.payload);
      console.log("found Item" + foundItem);

      if (foundItem) {
        foundItem.isComplete = !foundItem.isComplete;
      }
      //store.items.isComplete = !store.items.isComplete;
    },
  },
});
