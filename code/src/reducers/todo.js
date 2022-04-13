import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "1",
    text: "Make dinner reservation",
    complete: false,
  },
  {
    id: "2",
    text: "Laundry",
    complete: false,
  },
  {
    id: "3",
    text: "grocery shopping",
    complete: false,
  },
];

const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: data,
  },

  //Reducers to update the complete.
  //We receive 2 arguments from redux: store and action
  // store.items = name of our array
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },
    //remove one argument from the array
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
  },
});

export default tasks;
