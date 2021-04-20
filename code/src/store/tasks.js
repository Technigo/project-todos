import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {},
  reducers: {
    addTask() {},
    clearList() {},
    completeTask() {}
  }
})

export const { addTask, clearList, completeTask } = taskSlice.actions;
export default taskSlice.reducer;