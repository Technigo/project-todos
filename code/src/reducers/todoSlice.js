import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [
      { id: '2011-11-12T16:24:57.646Z', text: 'Buy milk', done: true },
      { id: '2014-02-16T16:24:57.646Z', text: 'Buy dark chocolate', done: false },
      { id: '2021-11-13T16:24:57.646Z', text: 'Buy 1kg bananas', done: false },
      { id: '2021-11-14T11:14:57.646Z', text: 'Get package from post office', done: false },
    ],
  },
  reducers: {
    saveTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      state.todoList = [...state.todoList, newTodo];
    },

    toggleComplete: (state, action) => {
      const toggleCompletedItems = state.todoList.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            done: !item.done,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });
      state.todoList = toggleCompletedItems;
    },

    deleteTodo: (state, action) => {
      const deleteAnItem = state.todoList.filter((item) => item.id !== action.payload);
      state.todoList = deleteAnItem;
    },
  },
});

export const { saveTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice;
