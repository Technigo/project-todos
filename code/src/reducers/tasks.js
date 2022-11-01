import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    todos: [
      { id: 1, title: 'do dishes', isDone: false },
      { id: 2, title: 'take out trash', isDone: true },
      { id: 3, title: 'go to the dentist', isDone: false }
    ]
  },
  reducers: {
    toggleTask: (store, action) => {
      console.log(store);
      console.log(action);
      store.todos.forEach((task) => {
        if (task.id === action.payload) {
          task.isDone = !task.isDone
        }
      })
    }
  }
});

export default tasks;