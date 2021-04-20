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
      let newTask = {
        id:Date.now(), 
        title: action.payload, 
        createdAt: new Date().toISOString(), 
        isComplete: false}
      store.items.push(newTask);
    },
    removeTask: (store, action) => {
      let eraseTaskIndex = store.items.find(item => item.id = action.payload).indexOf;
      store.items.splice(eraseTaskIndex, 1)
    },
    removeAllTasks: (store, action) => {
      store.items = []
    }
  }
});

export default tasks;

//addNewTask should pick up added title as the payload and update store with new task