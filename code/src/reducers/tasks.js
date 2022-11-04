import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import moment from 'moment';

// const initialState = {
//   items: [],
// };

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },

  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        timePosted: moment().format('DD MMMM YYYY, HH:mm')
      };
      store.items = [...store.items, newTask];
    }
  }
});

export default tasks;
