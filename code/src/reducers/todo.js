import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const { newTodo } = action.payload;

      store.items.push({
        id: uniqid(),
        text: newTodo,
        completed: false,
      });
    },
    toggleItem: (store, action) => {
      store.items.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const task = state.items.find((t) => t.id === id);
      state.items.splice(state.items.indexOf(task), 1);
    },
    deleteAllTasks: (state) => {
      state.items = [];
    },
  },
});

export default todo;
