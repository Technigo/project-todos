import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
      addTask: (state, action) => {
          const newTask = {
              id: Math.random(), 
              text: action.payload.task,
              complete: false
          }
          state.push(newTask);
      },
      deleteTask: (state, action) => {
          return state.filter((item) => item.id !== action.payload.id)
      },
      toggleItem: (state, action) => {
          state.forEach(item => {
              if (item.id === action.payload) {
                  item.complete = !item.complete;
              }
          })
      }
    }
})

export const {addTask, deleteTask, toggleItem} = tasks.actions;