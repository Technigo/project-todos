/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   tasksArray: []
// };

const taskListSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksArray: [
      { id: '1',
        title: 'Sova',
        isCompleted: false },
      {
        id: '2',
        title: 'Bada',
        isCompleted: true
      }
    ]
  },
  reducers: {

    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      // store.items.find((item) => item.id === action.payload).isCaught = !store.items.find((item) => item.id === action.payload).isCaught;
      store.tasksArray.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted
        }
      })
    },
    removeTask: (store, action) => {
      store.tasksArray = [...store.tasksArray.filter((task) => task.id !== action.payload)];
    }
  }
});

export default taskListSlice;