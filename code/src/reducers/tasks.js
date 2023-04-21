import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  todos: [
    { id: 1, text: 'Give mom a kiss', complete: true },
    { id: 2, text: 'Tidy Room', complete: false },
    { id: 3, text: 'Pick up clothes', complete: false },
    { id: 4, text: 'Help out with dishes', complete: false },
    { id: 5, text: 'Do your homework', complete: false }

  ]
}
// a slice=
export const tasks = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask: (store, action) => {
      store.todos = [...store.todos, action.payload];
    },
    deleteAllTask: (store) => {
      store.todos = [];
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