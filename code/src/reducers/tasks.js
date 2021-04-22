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
    setAllTaskstoCompleted: (store) => {
      const itemsAllCompleted = store.items.map((task) => {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      })
      store.items = itemsAllCompleted;
    },
  }
});

export default tasks;

