import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    todos: [
      { id: 1, title: 'Do the laundry', isDone: false },
      { id: 2, title: 'Fetch the package', isDone: false },
      { id: 3, title: 'Cook dinner', isDone: false },
      { id: 4, title: 'Have a bottle of wine', isDone: false }
    ]
  },
  reducers:
  {
    markTaskAsDone: (store, action) => {
      console.log(store);
      console.log(action);
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

export default tasks;