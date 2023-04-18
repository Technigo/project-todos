/* eslint-disable jsx-a11y/label-has-associated-control */
import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false

      }; // immutability
      store.items = [...store.items, newTodo];
    }
  }
})

export default todos;