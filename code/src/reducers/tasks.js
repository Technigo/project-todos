import { createSlice } from '@reduxjs/toolkit'


// this is a slice

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Test test test', isComplete: false },
      { id: 2, text: 'This is a test todo', isComplete: false },

    ]
  },
  reducers: {
    toggleComplete: (store, action) => {

      const taskDoneList = store.items.map(task => {
        if (task.id === action.payload) {
          return { ...task, isComplete: !task.isComplete}
        } else {
          return task
        }
      })
      store.items = taskDoneList
    },
    deleteTask: (store, action) => {
      const taskRemovedList = store.items.filter(task => task.id !== action.payload) 
          store.items = taskRemovedList             
    },
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
})

export default tasks