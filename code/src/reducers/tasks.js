import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 1, text: "Watch video on actions & reducers", complete: true },
  { id: 2, text: "Follow redux codealong", complete: true },
  { id: 3, text: "Fork weekly assignment", complete: false },
  { id: 4, text: "Create a todo app", complete: false },
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
  },
});

export default tasks;
