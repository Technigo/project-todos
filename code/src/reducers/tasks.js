import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // a slice=
  todos: [
    { id: 1, text: 'Tidy Room', complete: true },
    { id: 2, text: 'Pick up clothes', complete: true },
    { id: 3, text: 'Help out with dishes', complete: true },
    { id: 4, text: 'Do your homework', complete: true },
    { id: 5, text: 'Create a TODO', complete: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.todos = [...store.todos, action.payload];
    }
  }
})