import { createSlice } from "@reduxjs/toolkit";

const mockData = [
  { id: 1, text: "Watch video on actions & reducers", isCompleted: true },
  { id: 2, text: "Follow redux codealong", isCompleted: true },
  { id: 3, text: "Fork weekly assignment", isCompleted: true },
  { id: 4, text: "Create a todo app", isCompleted: false }
];

export const todos = createSlice({
  name: "todos",
  initialState: mockData
});
