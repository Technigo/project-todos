import { createSlice } from '@reduxjs/toolkit';

const todoData = [
  { id: 1, text: 'Watch video on actions & reducers', complete: false },
  { id: 2, text: 'Follow redux codealong', complete: false },
  { id: 3, text: 'Fork weekly assignment', complete: false }
];

let counter = todoData.lenght;

const todos = createSlice({
  name: 'todos',
  initialState: {
    todoData
  },

  reducers: {
    // adding new item to the todo
    addTodo: (store, action) => {
      store.todoData.push({
        id: counter += 1,
        text: action.payload,
        complete: false
      })
    },

    toggleItem: (store, action) => {
      store.todoData.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    },

    removeToDo: (store, action) => {
      store.todoData = store.todoData.filter((item) => item.id !== action.payload);
    },

    removeAllTodos: (store) => {
      store.todoData = []
    },

    completeAllTodos: (store) => {
      store.todoData.forEach((item) => { item.complete = true });
    }
  }
})

export default todos