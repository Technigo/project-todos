import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            complete: !task.complete,
          };
        } else {
          return task;
        }
      });
      store.items = updatedItems;
    },
    addTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    removeTask: (store, action) => {
      const decreasedItems = store.items.filter(task => task.id !== action.payload)

      store.items = decreasedItems;
    }
  }, 
});

export default tasks;
