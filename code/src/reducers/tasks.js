import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setUpStore: (state, action) => {
      state.items = action.payload;
    },
    addTask: (state, action) => {
      state.items = [action.payload, ...state.items]
      // This makes the array immutable (the spread operator)
      localStorage.setItem('taskList', JSON.stringify(state.items))
    },
    deleteAllTasks: (state) => {
      state.items = [];
      localStorage.setItem('taskList', JSON.stringify(state.items))
    },
    deleteSingleTask: (state, action) => {
      const id = action.payload; // Destructuring the object in the items array
      console.log('action.payload', action.payload)

      const copyOfTaskArrayFromStore = state.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore.splice(foundIndex, 1);
      state.items = copyOfTaskArrayFromStore;
      localStorage.setItem('taskList', JSON.stringify(state.items))
    },
    toggleIfTaskIsDone: (state, action) => {
      const id = action.payload; // Destructuring the object in the items array
      const copyOfTaskArrayFromStore = state.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore[foundIndex].isDone = !copyOfTaskArrayFromStore[foundIndex].isDone;
      state.items = copyOfTaskArrayFromStore;
      localStorage.setItem('taskList', JSON.stringify(state.items))
    }
  }
});