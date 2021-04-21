import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: []
  },
  reducers: {
    addTask(state, action) {
      state.list.unshift({
        id: uniqid(),
        value: action.payload,
        complete: false
      });
    },
    toggleTask(state, action) {
      const index = state.list.findIndex((task) => task.id === action.payload);
      state.list[index].complete = !state.list[index].complete;
    },
    clearList(state) {
      state.list = [];
    },
    deleteTask(state, action) {
      state.list = state.list.filter((task) => task.id !== action.payload);
    }
  }
});

export const { addTask, clearList, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
