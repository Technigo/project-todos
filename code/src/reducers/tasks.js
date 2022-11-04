/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { filters } from 'components/TaskFilters';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filteredBy: filters.ALL // This will set a default visible state to all items
  },
  reducers: {
    toggleChecked: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked
        }
      });
    },
    /* toggleChecked: (store, action) => {
      const updatedListItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTask = {
            ...item, isChecked: !item.isChecked
          };
          return updatedTask;
        } else {
          return item;
        }
      });
      store.items = updatedListItems
    }, */
    addTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    removeTask: (store, action) => {
      const updatedTaskList = store.items.filter((item) => {
        return item.id !== action.payload
      });
      store.items = updatedTaskList;
    },
    clearAllTasks: (store) => {
      store.items = [];
    },
    filteredTasks: (store, action) => {
      store.filteredBy = action.payload
    },
    setAllItems: (store, action) => {
      store.items = action.payload
    }
  }
});
export const { toggleChecked, addTask, removeTask, clearAllTasks, filteredTasks, setAllItems } = tasks.actions;

export default tasks;