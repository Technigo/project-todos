import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

const uncompleted = createSlice({
  name: 'uncompleted',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.tasks = [...store.tasks, action.payload]
    } // Immutable update of state
  }
});

export default uncompleted;

/* first argument references state, second arg ref.
the data that is passed down from a component */
// addTask: (store, action) => {
// Mutable way (changes the initial state)
// store.items.push(action.payload);
// ****** Immutable approach. BEST!..adds it to the end of the array *********
// store.uncompleted.tasks = [...store.uncompleted.tasks, action.payload]