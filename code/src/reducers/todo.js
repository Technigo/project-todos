import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "1",
    text: "Watch video on actions & reducers",
    complete: false,
  },
  {
    id: "2",
    text: "Follow redux codealong",
    complete: false,
  },
  {
    id: "3",
    text: "Fork weekly assignment",
    complete: false,
  },
  {
    id: "4",
    text: "Create a todo app",
    complete: false,
  },
];

const task = createSlice({
  name: "tasks",
  initialState: {
    items: data,
  },

  //Reducers to update the complete.
  //We receive 2 arguments from redux: store and action
  // store.items = name of our array
  reducers: {
    toggleItem: (store, action) => {
      console.log("Store:", store);
      console.log("Action:", action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },
  },
});

export default task;
