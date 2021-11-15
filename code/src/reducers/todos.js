import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  // always an object
  initialState: {
    items: [],
  },
  // an object where each property is one method to update the store
  reducers: {},
});

export default todos;
