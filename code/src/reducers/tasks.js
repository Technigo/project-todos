import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: "Tasks",
    items: [
      { id: 1, text: 'ToDo', complete: true, category: 'Mail' },
      { id: 2, text: 'ToDo', complete: true, category: 'Pay' },
      { id: 3, text: 'ToDo', complete: false, category: 'Do' },
      { id: 4, text: 'ToDo', complete: false, category: 'Buy' },
    ]
  }
};

export const tasks = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const { itemInfo } = action.payload;
      console.log(itemInfo)
      state.list.items.push(itemInfo);
    },
    removeTask: (state, action) => {
      const itemId = action.payload;
      state.list.items = state.list.items.filter(
        (item) => item.id !== itemId
      );
    },
    setDone: (state, action) => {
      const itemId = action.payload;
      const foundItem = state.list.items.find((item) => item.id === itemId)
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },
    removeAllTasks: (state, action) => {
      state.list.items = []
    }
  }
});