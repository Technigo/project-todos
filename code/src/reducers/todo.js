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
    deleteTask: (store, action) => {
      const { id } = action.payload;
      const task = store.items.find((t) => t.id === id);
      store.items.splice(store.items.indexOf(task), 1);
    },
    deleteAllTasks: (store) => {
      store.items = [];
    },
  },
});

export default todo;
