import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "oshdfi24",
    Todo: "Clean shit up",
    isDone: false,
  },
  {
    id: "oshdfi4564",
    Todo: "Vacuum apartment",
    isDone: false,
  },
];

const todos = createSlice({
  name: "todos",
  initialState: {
    items: data,
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },
  },
});

export default todos;
