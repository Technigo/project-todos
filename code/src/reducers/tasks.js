import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    // { id: 5, text: 'Buy candy for tonight', complete: false },
    // { id: 2, text: 'Watch a movie', complete: false },
    // { id: 9, text: 'Make popcorn', complete: false }
  ]
};

const tasks = createSlice({
  name: 'todos',
  initialState,
  reducers:
  {
    addTodo: (store, action) => {
      console.log(action);
      const newTask = {
        id: Math.max(...store.items.map((item) => item.id)) + 1,
        text: action.payload,
        complete: false
      };

      const newTaskList = [...store.items, newTask]
      store.items = newTaskList;
    },

    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1)
    },

    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },
    clearAll: () => {
      return initialState;
    }
  }
});

export default tasks;