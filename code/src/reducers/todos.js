import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const data = action.payload;

      store.items = [...store.items, data];
    },
  },
});

export default todos;
