import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [{ id: 1, description: "test", isComplete: false }],
  },
  reducers: {},
});
