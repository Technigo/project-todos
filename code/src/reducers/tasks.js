/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
  // this is the array of items(tasks), it starts empty
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument references the data that is
    // passed down from a component

    addTask: (store, action) => {
      store.items = [action.payload, ...store.items]
      // this uppdates the store with the action payload using the spread syntax.
    },
    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload.taskId) {
          item.isDone = !item.isDone
        }
      })
    }, // the toggleTask function uses the forEach loop to iterate over the items array. It check the condition (if item.id is the same as the action.payload.id) then the isDone property is changed. It doesn't matter if it's set as true or false, it just changes to one or the other.
    deleteTask: (store, action) => {
      const index = store.items.findIndex((element) => element.id === action.payload.id);
      store.items.splice(index, 1);
      // The deleteTask function will remove the element that is found via the findIndex function
    },
    clearTasks: () => {
      return initialState
    }
    // the clearTasks function will return to the intitial state, which is an empty array.
  }
})