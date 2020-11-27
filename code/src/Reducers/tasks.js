import { createSlice } from '@reduxjs/toolkit';
//Add multiple lists

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    name: 'Emelies List',
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { taskInfo } = action.payload
      state.items = [...state.items, taskInfo]
    },
    removeItem: (state, action) => {
      const { id } = action.payload
      state.items = state.items.filter(task=>task.id!==id)
    },
    removeAll: (state) => {
      state.items = []
    },
    toggleDone: (state, action) => {
      const { id } = action.payload
      const foundItem = state.items.find(item => item.id === id)
      if (foundItem) {
        foundItem.done = !foundItem.done
      } 
    }
  }
});
