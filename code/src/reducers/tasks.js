import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 1, text: "Watch video on actions & reducers", complete: false },
];

const tasks = createSlice({
  name: "tasks",
  initialState: {
    taskitems: data,
  },
  reducers: {
    toggleitem: (store, action) => {
      console.log("store", store);
      console.log("action", action);
      store.taskitems.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },

    deleteitem: (store, action) => {
      store.taskitems.splice(action.payload, 1);
    },
    additem: (store, action) => {
      store.taskitems.push(action.payload);
    },
    filterdone: (store, action) => {
      store.taskitems.filter(action.payload);
    },
  },
});

export default tasks;
