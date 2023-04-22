
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
    deleteList: (state, action) => {
      const { name } = action.payload;
      const listIndex = state.lists.findIndex((list) => list.name === name);
      if (listIndex === -1) {
        return state;
      }
      const updatedLists = [
        ...state.lists.slice(0, listIndex),
        ...state.lists.slice(listIndex + 1)
      ];
      return { ...state, lists: updatedLists };
    },
    addItem: (state, action) => {
      const { listIndex, item } = action.payload;
      const listToUpdate = state.lists[listIndex];
      const updatedList = { ...listToUpdate, items: [...listToUpdate.items, item] };
      const updatedLists = [...state.lists.slice(0, listIndex), updatedList, ...state.lists.slice(listIndex + 1)];
      return { ...state, lists: updatedLists };
    },

    deleteItem: (state, action) => {
      const { listIndex, itemId } = action.payload;
      const listToUpdate = state.lists[listIndex];
      const updatedItems = listToUpdate.items.filter((item) => item.id !== itemId);
      const updatedList = { ...listToUpdate, items: updatedItems };
      const updatedLists = [...state.lists.slice(0, listIndex), updatedList, ...state.lists.slice(listIndex + 1)];
      return { ...state, lists: updatedLists };
    },

    toggleItem: (state, action) => {
      const { listIndex, itemId } = action.payload;
      const listToUpdate = state.lists[listIndex];
      const itemToUpdate = listToUpdate.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.complete = !itemToUpdate.complete;
      }
    },
    togglePriority: (state, action) => {
      const { listIndex, itemId } = action.payload;
      const listToUpdate = state.lists[listIndex];
      const itemToUpdate = listToUpdate.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.priority = !itemToUpdate.priority;
      }
    },
    sortItems: (state, action) => {
      const { listIndex } = action.payload;
      const listToUpdate = state.lists[listIndex];
      if (!listToUpdate) {
        return state;
      }
      const sortedItems = [...listToUpdate.items];
      sortedItems.sort((a, b) => {
        if (a.complete && !b.complete) {
          return 1;
        } else if (!a.complete && b.complete) {
          return -1;
        } else {
          return 0;
        }
      });
      const updatedList = { ...listToUpdate, items: sortedItems };
      const updatedLists = [
        ...state.lists.slice(0, listIndex),
        updatedList,
        ...state.lists.slice(listIndex + 1)
      ];
      return { ...state, lists: updatedLists };
    },

    sortPriority: (state, action) => {
      const { listIndex } = action.payload;
      const listToUpdate = state.lists[listIndex];
      if (!listToUpdate) {
        return state;
      }
      const sortedItems = [...listToUpdate.items];
      sortedItems.sort((a, b) => {
        if (!a.priority && b.priority) {
          return 1;
        } else if (a.priority && !b.priority) {
          return -1;
        } else {
          return 0;
        }
      });
      const updatedList = { ...listToUpdate, items: sortedItems };
      const updatedLists = [
        ...state.lists.slice(0, listIndex),
        updatedList,
        ...state.lists.slice(listIndex + 1)
      ];
      return { ...state, lists: updatedLists };
    }
  }
});

export const { addList, addItem, toggleItem, togglePriority, deleteItem, sortItems, sortPriority, deleteList } = tasksproject.actions;

export default tasksproject.reducer;
