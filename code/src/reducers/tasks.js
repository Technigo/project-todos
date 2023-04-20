import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '1',
      text: 'To do 1',
      completed: false
    },
    {
      id: '2',
      text: 'To do 2',
      completed: true
    },
    {
      id: '3',
      text: 'To do 3',
      completed: false
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    },
    removeTask: (store, action) => {
      const existingTask = store.items.findIndex((task) => task.id === action.payload.id);
      store.items.splice(existingTask, 1);
    },
    toggleCheckbox: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    }
  }
});

export default tasks;