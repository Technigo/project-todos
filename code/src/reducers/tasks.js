/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

const taskData = [
  { id: 1, text: 'task to do 1', created: '10/10/2022', due: '10/11/2022', completed: false },
  { id: 2, text: 'task to do 2', created: '10/10/2022', due: '10/11/2022', completed: false },
  { id: 3, text: 'task to do 3', created: '10/10/2022', due: '10/11/2022', completed: false },
  { id: 4, text: 'task to do 4', created: '10/10/2022', due: '10/11/2022', completed: true },
];

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: taskData,
    completedTask: false,
  },
  reducers: {
    addItem: (state, action) => {
      const { text, due } = action.payload.response
      const lastItemOfTaskData = taskData[taskData.length - 1].id
      state.tasks.push({
        id: lastItemOfTaskData + 1,
        text,
        created: Date.now(),
        due,
        completed: false,
      })
      console.log(action);
    },
    removeItem: (state, action) => {
      console.log(action);
    },
  },
});
