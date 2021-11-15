import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [
    { id: "2011-11-12T16:24:57.646Z", item: 'Buy milk', done: false },
    { id: "2014-02-16T16:24:57.646Z", item: 'Buy dark chocolate', done: false },
    { id: "2021-11-13T16:24:57.646Z", item: 'Buy 1kg bananas', done: false },
    { id: "2021-11-14T11:14:57.646Z", item: 'Get package from post office', done: false },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { saveTodo } = todoSlice.actions;
export default todoSlice;
