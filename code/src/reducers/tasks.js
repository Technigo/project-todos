import { createSlice } from '@reduxjs/toolkit';    

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            isComplete: !task.isComplete
          }
        } else {
          return task;
        }
      });
      store.items = updatedItems;
    },
    addNewTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    removeTask: (store, action) => {
      const itemsAfterRemoval = store.items.filter(task => 
        task.id !== action.payload);
        store.items = itemsAfterRemoval;
    },
    setAllTaskstoCompleted: (store, action) => {
      const itemsAllCompleted = store.items.forEach (task => task.isComplete = true);
      store.items = itemsAllCompleted;
    },
  }
});

export default tasks;

