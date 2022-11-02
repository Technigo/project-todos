import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: Date.now(),
        name: 'dishes',
        isDone: true
      },
      {
        id: Math.random(),
        name: 'garbaige',
        isDone: false
      }
    ]
  },
  reducers: {
    toggleTodoItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    }
    addToDo: (store, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        idDone: false
      }
      store.items.push(action.payload)
    }
  }
});

export default todos;