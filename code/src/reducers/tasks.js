import { createSlice } from "@reduxjs/toolkit";

const data = [];

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: data,
  },
  reducers: {
    toggleTask: (store, action) => {
      console.log("store:", store);
      console.log("Action:", action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
  },
});

export default tasks;
