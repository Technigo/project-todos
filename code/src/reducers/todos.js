import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {
    name: 'start',
    items: [
      {
        description: '',
        done: false
      }
    ]
  }
};

export const todos = createSlice({
 name: 'todos',
 initialState: initialState,
 reducers: {
   addTodo: (state, action) => {
     const itemInfo = action.payload;
     state.list.items.push(itemInfo)
   },
   setDone: (state, action) => {
     const { itemIndex, done } = action.payload;
     state.list.items[itemIndex].done = done;
   },
   deleteTodo: (state, action) => {
     const { itemIndex } = action.payload;
     state.list.items = state.list.items.filter(
      (item, index) => index !== itemIndex
    )
   },
   DeleteTodos: (state) => {
     state.list.items = [];
   },
 }
});