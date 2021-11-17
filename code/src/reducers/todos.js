import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, text: "test task", isComplete: false },
      { id: 2, text: "test task two", isComplete: false },
    ],
  },
});
