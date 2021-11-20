import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import uniqid from 'uniqid';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        complete: false,
        timestamp: moment().calendar()
      };
      state.items = [newTask, ...state.items];
    },
    toggleCheck: (state, action) => {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload) {
          const updatedCheck = {
            ...item,
            complete: !item.complete
          };
          return updatedCheck;
        } else {
          return item;
        }
      });
      state.items = updatedItems;
    },
    deleteTask: (state, action) => {
      const leftItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = leftItems;
    },
    completeAllTask: (state, action) => {
      const allItemsComplete = state.items.map((item) => {
        const updatedCheck = {
          ...item,
          complete: true
        };
        return updatedCheck;
      });
      state.items = allItemsComplete;
    },
    deleteAll: (state) => {
      const emptyTask = [];
      state.items = emptyTask;
    }
  }
});

export default tasks;
