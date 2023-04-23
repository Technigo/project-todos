import { createSlice } from '@reduxjs/toolkit';
// The initial state of the `tasks` slice of the Redux store
const initialState = {

  todos: [
    { id: 1, text: 'Give mom a kiss', complete: true },
    { id: 2, text: 'Tidy Room', complete: false },
    { id: 3, text: 'Pick up clothes', complete: false },
    { id: 4, text: 'Help out with dishes', complete: false },
    { id: 5, text: 'Do your homework', complete: false }

  ]
}
// Create a Redux slice, which defines a set of actions and a reducer function that
// update the `tasks` state in the Redux store
export const tasks = createSlice({
  name: 'tasks',
  initialState,
  // An object containing the slice's reducer functions, which are called when an action
  // is dispatched to update the slice's state
  reducers: {
    // Add a new task to the `todos` array
    addTask: (store, action) => {
      // `action.payload` is the new task object that was passed in when the action was dispatched
      store.todos = [...store.todos, action.payload];
    },
    // Remove all tasks from the `todos` array
    deleteAllTask: (store) => {
      store.todos = [];
    },
    // Remove a specific task from the `todos` array based on its `id` property
    removeTask: (store, action) => {
      const taskId = action.payload;
      store.todos = store.todos.filter((todo) => todo.id !== taskId);
    },
    // Toggle the `complete` property of a specific task in the `todos` array
    // based on its `id` property
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

// Identifiers in this code refer to names that are given to various entities,
// such as variables, functions, and objects. In this code, some of the identifiers include:
// createSlice, initialState, tasks