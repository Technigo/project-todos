import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      {id: 1, text: 'bake bread', done: false},
      {id: 2, text: 'put up christmas decoration', done: false},
      {id: 3, text: 'call mum', done: true}
    ]
  }
});
