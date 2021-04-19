import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos", //same name as the varible
  initialState: {
    items: [
      { id: 1, description: "First taks", isComplete: false }, // things we want to store
      { id: 2, description: "Second task", isComplete: true },
      { id: 3, description: "Third task", isComplete: false }
    ],
  },
  reducers: {
    // leav this for now
  },
});

export default todos;