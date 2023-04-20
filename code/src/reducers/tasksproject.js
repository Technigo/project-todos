
/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: []
};

export const tasksproject = createSlice({
  name: 'tasksproject',
  initialState,

  reducers: {
    addList: (state, action) => {
      const { name } = action.payload;
      const newList = { name, items: [] };
      return { ...state, lists: [...state.lists, newList] };
    },
    addItem: (state, action) => {
      const { listIndex, item } = action.payload;
      const listToUpdate = state.lists[listIndex];
      const updatedList = { ...listToUpdate, items: [...listToUpdate.items, item] };
      const updatedLists = [...state.lists.slice(0, listIndex), updatedList, ...state.lists.slice(listIndex + 1)];
      return { ...state, lists: updatedLists };
    }
  }
});

export const { addList, addItem } = tasksproject.actions;

export default tasksproject.reducer;
