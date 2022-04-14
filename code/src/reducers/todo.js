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

  //Reducers to update the completed todos.
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },
    //remove argument from the array
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    //add argument to the array
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
  },
});

export default tasks;
