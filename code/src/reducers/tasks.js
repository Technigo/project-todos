import { createSlice } from '@reduxjs/toolkit';
import { filters } from 'components/TaskFilters';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filteredBy: filters.ALL // This will set an ALL state to all items
  },
  reducers: {
    toggleChecked: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked
        }
      })
    },
    addTask: (store, action) => {
      store.items.push(action.payload);
    },
    removeTask: (store, action) => {
      store.items = store.items.filter(((item) => item.id !== action.payload))
    },
    clearAllTasks: (store) => {
      store.items = [];
    },
    filteredTasks: (store, action) => {
      store.filteredBy = action.payload
    }
  }
});
export const { clearAllTasks, filteredTasks } = tasks.actions;

export default tasks;