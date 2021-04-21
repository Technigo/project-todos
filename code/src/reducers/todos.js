import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: []
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo;
        }
      });

      store.tasks = updatedTasks;
    }, 
    addTodo: (store, action) => {
      store.tasks = [...store.tasks, action.payload];
    },
    removeTodo: (store, action) => {
      const decreasedTasks = store.tasks.filter(todo => todo.id !== action.payload);

      store.tasks = decreasedTasks;
    },
    completeAllTasks: (store) => {
      const updatedCompletion = store.tasks.map(todo => {
        if (todo.isComplete === false) {
          return {
            ...todo,
            isComplete: true
          }
        } else {
          return todo;
        }
      });
      
      store.tasks = updatedCompletion;
    }
  }
});

export default todos;