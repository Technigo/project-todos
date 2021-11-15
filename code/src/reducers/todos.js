import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action);
      const data = action.payload;

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      // v1 mutability not good in redux without immer
      // store.items.push(data);

      // v2 Immuteability
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      console.log(action);

      // v1 mutability
    },
  },
});

export default todos;
