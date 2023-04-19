import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // a slice=
  todos: [
    { id: 1, text: 'Tidy Room', complete: false },
    { id: 2, text: 'Pick up clothes from dryer', complete: false },
    { id: 3, text: 'Help out with dishes', complete: false },
    { id: 4, text: 'Do your homework', complete: false },
    { id: 5, text: 'Create a TODO-list', complete: true }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask: (store, action) => {
      store.todos = [...store.todos, action.payload];
    },
    removeTask: (store, action) => {
      const taskId = action.payload;
      store.todos = store.todos.filter((todo) => todo.id !== taskId);
    },
    toggleComplete: (store, action) => {
      const index = store.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        store.todos[index].complete = !store.todos[index].complete;
      }
    }
  }
})
// By using the Array#filter method, (in the removeTask)
// you are creating a new array without modifying the original array,
// which follows the principle of immutability.