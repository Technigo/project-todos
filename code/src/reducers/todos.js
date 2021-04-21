import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      { id: 1, content: 'Do the laundry', isComplete: false },
      { id: 2, content: 'Vacuum', isComplete: false },
      { id: 3, content: 'Cook food', isComplete: false },
      { id: 4, content: 'Fold clothes', isComplete: false }
    ],
    // todoCounter,

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
      store.tasks.push({
        ...action.payload,
        isComplete: false
      })
    },
    removeTodo: (store, action) => {

    }
  }
});

export default todos;