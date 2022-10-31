import { createSlice } from "@reduxjs/toolkit";

const taskListData = []

export const tasks = createSlice({
  name: 'tasks',
  initialState: taskListData

})