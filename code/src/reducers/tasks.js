import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: "Tasks",
    items: [
      { id: 1, text: 'ToDo', complete: true, category: 'Contact' },
      { id: 2, text: 'ToDo', complete: false, category: 'Pay' },
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
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      );
    },
    setDone: (state, action) => {
      const { itemIndex, complete } = action.payload;
      state.list.items[itemIndex].complete = complete;
    },
    removeAllTasks: (state, action) => {
      state.list.items = []
    }
  }
});