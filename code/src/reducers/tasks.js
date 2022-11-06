import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    todos: [
      { id: 1, title: 'groceries', isDone: false },
      { id: 2, title: 'pick up kids from day care', isDone: false },
      { id: 3, title: 'traveling on Friday', isDone: false }
    ]
  },

  reducers:
  {
    markTaskAsDone: (store, action) => {
      store.todos.forEach((task) => {
        if (task.id === action.payload) {
          task.isDone = !task.isDone
        }
      })
    },
    addNewTask: (store, action) => {
      store.todos.push(action.payload);
    },
    removeTask: (store, action) => {
      store.todos.splice(action.payload, 1)
    }
  }
});

export default tasks