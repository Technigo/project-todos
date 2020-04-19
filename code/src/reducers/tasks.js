import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: "Tasks",
    items: [
      { id: 1, text: 'ToDo', complete: true },
      { id: 2, text: 'ToDo', complete: true },
      { id: 3, text: 'ToDo', complete: true },
      { id: 4, text: 'ToDo', complete: false },
    ]
  }
};

export const tasks = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const { itemInfo } = action.payload;
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
    }
  }
});
