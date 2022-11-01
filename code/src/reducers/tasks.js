/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {
        id: '2',
        name: 'To do 2',
        isDone: false,
      },
      {
        id: '1',
        name: 'To Do 1',
        isDone: false,
      },
    ],
  },
  reducers: {
    toggleTask: (store, action) => {
      console.log(store);
      console.log(action);
      //   store.items.find((item) => item.is === action.payload).isDone =
      //     !store.items.find((item) => item.is === action.payload).isDone;
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },
  },
});

export default tasks;
