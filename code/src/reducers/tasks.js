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
    filterOn: 'all',
  },
  reducers: {
    addItem: (state, action) => {
      const { text, due } = action.payload.response
      const lastItemOfTaskData = state.tasks[state.tasks.length - 1].id
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
      const { id } = action.payload
      state.tasks = state.tasks.filter((item) => item.id !== id)
    },
    checkItem: (state, action) => {
      const { id } = action.payload
      console.log(action.payload)
      const selectedTask = id !== null && state.tasks.find((item) => item.id === id)
      const selectedTaskIndex = state.tasks.indexOf(selectedTask)
      console.log('selectedTaskid:', selectedTask.id, 'selectedTaskcompleted:', selectedTask.completed, 'index:', selectedTaskIndex)
      if (id === null) {
        state.tasks.forEach((task) => {
          task.completed = true
        })
        return
      }

      if (selectedTask.completed) {
        selectedTask.completed = false
      } else {
        selectedTask.completed = true
      }
    },
    filterOn: (state, action) => {
      const { filter } = action.payload
      state.filterOn = filter
    },
  },
});
